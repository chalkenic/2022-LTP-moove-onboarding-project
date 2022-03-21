<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use App\Notifications\MailResetPasswordNotification;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Notification;
use Tests\TestCase;

class ForgotPasswordTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function reset_password_link_can_be_requested() {
        Notification::fake();
        $user = User::factory()->create(['role' => 'TENANT']);
        $this->post('/forgot-password', ['email' => $user->email]);
        Notification::assertSentTo($user, MailResetPasswordNotification::class);
    }
}