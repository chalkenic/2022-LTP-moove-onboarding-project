<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExampleController extends Controller
{
    public function index() {
        return view('react-test', $data = [
            'message' => 'I was added to the view (blade) by a controller!'
        ]);
    }
}