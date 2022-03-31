<?php

namespace App\Spiders\Processors;

use \RoachPHP\ItemPipeline\Processors\ItemProcessorInterface;
use \RoachPHP\Support\Configurable;
use \RoachPHP\ItemPipeline\ItemInterface;
use App\Models\Property;

class MoovePropertiesInterface implements ItemProcessorInterface
{

    use Configurable;

    public function processItem(ItemInterface $item) : ItemInterface {

        foreach ($item->all() as $splitItem) {
            Property::where('name', $splitItem['address'])
                ->update([
                    'image' => $splitItem['image'],
                    'moove_url' => $splitItem['link'],
                ]);
        }

        return $item;
    }
}
