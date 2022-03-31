<?php

namespace App\Spiders;

use Generator;
use RoachPHP\Downloader\Middleware\RequestDeduplicationMiddleware;
use RoachPHP\Extensions\LoggerExtension;
use RoachPHP\Extensions\StatsCollectorExtension;
use RoachPHP\Http\Request;
use RoachPHP\Http\Response;
use RoachPHP\Spider\BasicSpider;
use RoachPHP\Spider\ParseResult;
use Symfony\Component\DomCrawler\Crawler;
use App\Spiders\Processors\MoovePropertiesInterface;

class MooveListingSpider extends BasicSpider
{
    public array $startUrls = [
        'https://app.moove.to/properties'
    ];

    public array $downloaderMiddleware = [
        RequestDeduplicationMiddleware::class,
    ];

    public array $spiderMiddleware = [
        //
    ];

    public array $itemProcessors = [
        MoovePropertiesInterface::class
    ];

    public array $extensions = [
        LoggerExtension::class,
        StatsCollectorExtension::class,
    ];

    public int $concurrency = 2;

    public int $requestDelay = 1;


    /**
     * @return Generator<ParseResult>
     */
    public function parse(Response $response): Generator
    {
        // apparently in php, it's hard to do this without splitting it into another variable
        $paginationLinks = $response->filter('.pagination a');

        $maxPage = intval($paginationLinks->eq(count($paginationLinks->links())-2)->innerText());

        for ($i = 1; $i < $maxPage; $i++ ) {
            $uri = "https://app.moove.to/properties?page=".$i;

            $request = new Request('GET', $uri, [$this, 'parsePropertyPage']);
            //error_log('Processing property page ' . $i);

            yield ParseResult::fromValue($request);
        }
    }

    public function parsePropertyPage(Response $response): Generator
    {
        yield $this->item(
            $response->filter('.property-card')
                ->each(function (Crawler $crawler) {
                    //error_log('Got a property!');
                    $address = $crawler->filter('.property-name h2')->first()->innerText();
                    return [
                        'link' => $crawler->attr('href'),
                        'address' => substr($address, 0, strpos($address, ',')),
                        'image' => $crawler->filter('.property-image')->first()->attr('src')
                    ];
                })
        );
    }


}
