<?php

namespace Tests\Feature;

use App\Models\User;
use App\Notifications\ApplicationApproved;
use App\Notifications\ApplicationRejected;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;
use Tests\TestCase;

class ApplicationApprovalTest extends TestCase
{
    use DatabaseMigrations;

    protected function setUp(): void
    {
        parent::setUp();
        Notification::fake();
    }

    /**
     * @test
     */
    public function admin_can_approve_application() {
        $admin = User::factory()->create(['role' => 'ADMIN']);
        $tenant = User::factory()->create(['role' => 'TENANT']);
        $tenant->application()->create();

        Auth::login($admin);

        $this->putJson('/admin-change-application', [
            'id' => $tenant->id,
            'approved' => true
        ]);

        // 1 means approved!
        $this->assertEquals(
            1,
            $tenant->application->is_approved
        );

        Notification::assertSentTo($tenant, ApplicationApproved::class);
    }

    /**
     * @test
     */
    public function admin_can_deny_application() {
        $admin = User::factory()->create(['role' => 'ADMIN']);
        $tenant = User::factory()->create(['role' => 'TENANT']);
        $tenant->application()->create();

        Auth::login($admin);

        $this->putJson('/admin-change-application', [
            'id' => $tenant->id,
            'approved' => false
        ]);

        // 2 means denied!
        $this->assertEquals(
            2,
            $tenant->application->is_approved
        );

        Notification::assertSentTo($tenant, ApplicationRejected::class);
    }

    /**
     * @test
     */
    public function admin_can_deny_application_with_notes() {
        $admin = User::factory()->create(['role' => 'ADMIN']);
        $tenant = User::factory()->create(['role' => 'TENANT']);
        $tenant->application()->create();

        Auth::login($admin);

        $this->putJson('/admin-change-application', [
            'id' => $tenant->id,
            'approved' => false,
            'notes' => 'Missing driver\'s license.'
        ]);

        // 2 means denied!
        $this->assertEquals(
            2,
            $tenant->application->is_approved
        );

        $this->assertEquals(
            'Missing driver\'s license.',
            $tenant->application->notes
        );

        Notification::assertSentTo($tenant, ApplicationRejected::class);
    }

    /**
     * @test
     */
    public function tenant_can_reopen_application_after_rejection() {
        $admin = User::factory()->create(['role' => 'ADMIN']);
        $tenant = User::factory()->create(['role' => 'TENANT']);
        $tenant->application()->create();
        Auth::login($admin);

        $this->putJson('/admin-change-application', [
            'id' => $tenant->id,
            'approved' => false,
            'notes' => 'Missing driver\'s license.'
        ]);

        // 2 means denied!
        $this->assertEquals(
            2,
            $tenant->application->is_approved
        );

        $this->assertEquals(
            'Missing driver\'s license.',
            $tenant->application->notes
        );

        Notification::assertSentTo($tenant, ApplicationRejected::class);

        // Adding a file reopens the application to be re-checked
        $tenant->application->files()->create([
            'filename' => 'a_new_file.pdf',
            'url' => 'https://bucket.aws.location/path'
        ]);

        // Assert the application was marked as updated when the file
        // was created
        $this->assertEquals(
            $tenant->application->files()->first()->created_at,
            $tenant->application->updated_at
        );
    }

}