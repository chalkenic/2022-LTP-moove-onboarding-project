<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class VideoIDTest extends TestCase
{

    use DatabaseMigrations;
    
    /**
     * @test
     */
    public function tenant_can_view_video_upload_ID_page()
    {
        $response = $this->get('/tenant-upload-video');

        $response->assertStatus(200);
    }

    /**
     *  @test
     */
    public function tenant_can_upload_video_ID()
    {

        Storage::fake('videos');

        $file = UploadedFile::fake()->create('user.mp4');

        $response = $this->post('/tenant-upload-video', ['title' => 'USER', 'video' => $file]);

        $response->assertStatus(200);
    }

}