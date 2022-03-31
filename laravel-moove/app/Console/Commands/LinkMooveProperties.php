<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use RoachPHP\Roach;
use App\Spiders\MooveListingSpider;

class LinkMooveProperties extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'moove:link';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Links Moove properties to the app proper.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Attempting to link moove properties..');
        Roach::startSpider(MooveListingSpider::class);
        $this->info('Link complete.');
        return 0;
    }
}
