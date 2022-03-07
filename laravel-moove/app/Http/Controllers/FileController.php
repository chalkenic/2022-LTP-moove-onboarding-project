<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function __construct() {
        $this->middleware(['tenant']);
    }

    public function store(Request $request) {
        $request->validate([
            'file' => 'required|mimes:pdf,jpeg,png'
        ]);

        $path = $request->file('file')->storeAs(
            'files/'.auth()->user()->id,
            $request->file('file')->getClientOriginalName()
        );

        // Limitation of PHP, grumble grumble
        $filenameArr = explode("/", $path);
        
        auth()->user()->application->files()->save(
            new File([
                'filename' => end($filenameArr),
                'url' => 'https://a-cloud-location/filename.jpg'
            ])
        );

        return redirect('/application');
    }
}