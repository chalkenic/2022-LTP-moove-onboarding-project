<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use RoachPHP\Roach;
use App\Spiders\MooveListingSpider;

class AdminController extends Controller
{

    public function __construct() {
        $this->middleware(['admin']);
    }

    public function index() {
        return view('admin.admin-home');
    }

    public function spider() {
        dd(Roach::startSpider(MooveListingSpider::class));
    }
}
