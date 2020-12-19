<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ThongBaoVe extends Notification
{
    use Queueable;

    public $notices, $plain;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($notices, $plain = false)
    {
        //
        $this->notices = $notices;
        $this->plain = $plain;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        if ($this->plain)
            return (new MailMessage)
                ->view('plain-email', ['datve' => $this->notices])
                ->subject('Nhắc nhở lịch bay!!!');

        $lines = '';
        foreach ($this->notices as $line) {
            $lines .= '- ' . $line . '\n';
        }
        return (new MailMessage)
            ->line($lines)
            ->subject('Cảnh báo xuất vé máy bay!!! ' . config('app.name'));
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
