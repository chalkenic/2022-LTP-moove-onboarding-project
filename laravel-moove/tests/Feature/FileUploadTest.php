<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class FileUploadTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function tenant_can_upload_a_file()
    {
        Storage::fake();

        $tenant = User::factory()->create(['role' => 'TENANT']);
        Auth::login($tenant);

        // Initialise an application for the files to be uploaded to
        $postApplication = $this->post('/start-application');
        $postApplication->assertViewIs('tenant.application');

        // Upload a file
        $this->post('/tenant-upload', [
            'file' => UploadedFile::fake()->create('my_document.pdf')
        ]);
        Storage::assertExists('files/'.$tenant->id.'/my_document.pdf');
    }
}