<?php

namespace App\Observers;

use App\Models\File;
use Illuminate\Support\Facades\Date;

class FileObserver
{
    public function created(File $file) {
        $file->application->updated_at = Date::now();
        $file->application->save();
    }
}