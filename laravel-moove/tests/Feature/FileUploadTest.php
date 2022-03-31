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

    protected $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        Storage::fake();
        $this->tenant = User::factory()->create(['role' => 'TENANT']);
        $this->tenant->application()->create();
        Auth::login($this->tenant);
    }

    /**
     * @test
     */
    public function tenant_can_upload_a_file()
    {
        // Upload a file
        $this->followingRedirects()->post('/tenant-upload', [
            'file' => UploadedFile::fake()->create('my_document.pdf')
        ])->assertSee('Successfully uploaded file');
        
        Storage::assertExists('files/'.$this->tenant->id.'/my_document.pdf');

        // Hacky way of checking the file is persisted, since we can't
        // check for the whole row because of how dates are serialised
        $id = $this->tenant->application->files()->first()->id;
        $this->assertDatabaseHas('files', ['id' => $id]);
    }

    /**
     * @test
     */
    public function tenant_can_delete_a_file()
    {
        $this->post('/tenant-upload', [
            'file' => UploadedFile::fake()->create('my_document.pdf')
        ]);

        $id = $this->tenant->application->files()->first()->id;
        $this->followingRedirects()->delete('/tenant-upload' . '/' . $id)
            ->assertSee('File deleted successfully');
        $this->assertDatabaseMissing('files', ['id' => $id]);
    }

    /**
     * @test
     */
    public function tenant_can_not_delete_someone_elses_file()
    {
        $this->post('/tenant-upload', [
            'file' => UploadedFile::fake()->create('my_document.pdf')
        ]);
        $id = $this->tenant->application->files()->first()->id;
       
        // Create another user, who also has an application,
        // and authenticate as them, then try and delete
        // somebody else's file.
        $anotherTenant = User::factory()->create(['role' => 'TENANT']);
        $anotherTenant->application()->create();
        Auth::login($anotherTenant);
        
        $this->followingRedirects()->delete('/tenant-upload' . '/' . $id)
            ->assertSee('That isn\'t your file to delete');
        $this->assertDatabaseHas('files', ['id' => $id]);
    }
}