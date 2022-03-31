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
        //
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
            error_log('Processing property page ' . $i);

            yield ParseResult::fromValue($request->withMeta('page', $i));
        }
    }

    public function parsePropertyPage(Response $response): Generator
    {
        $properties = $response->filter('.property-card')
            ->each(function (Crawler $crawler) {
                error_log('Got a property!');
                return $this->item([
                    'link' => $crawler->attr('href'),
                    'address' => $crawler->filter('.property-name h2')->first(),
                    'image' => $crawler->filter('.property-image')->first()->attr('src')
                ]);
            });

        yield $this->item($properties);
    }


}
