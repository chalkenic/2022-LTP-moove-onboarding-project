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
        $filename = end($filenameArr);

        if (File::where('filename', $filename)->exists()) {
            $filename = $filename.' (duplicate)';
        }
        
        auth()->user()->application->files()->save(
            new File([
                'filename' => $filename,
                'url' => 'https://a-cloud-location/filename.jpg'
            ])
        );

        auth()->user()->application->update([
            'notes' => null
        ]);

        return redirect('/application')->with([
            'success' => 'Successfully uploaded file ' . $filename
        ]);
    }

    public function destroy(File $file) {
        if ($file->application != auth()->user()->application) {
            return redirect('/application')->with([
                'error' => 'That isn\'t your file to delete.'
            ]);
        } else {
            $file->delete();
            return redirect('/application')->with([
                'success' => 'File deleted successfully.'
            ]);
        }
    }
}