<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use RoachPHP\Roach;
use App\Spiders\MooveListingSpider;
use App\Models\Property;

class AdminController extends Controller
{

    public function __construct() {
        $this->middleware(['admin']);
    }

    public function index() {
        return view('admin.admin-home');
    }

    public function spider() {
        Roach::startSpider(MooveListingSpider::class);

        echo 'Moove scrape complete';
        dd(Property::all());
    }
}
