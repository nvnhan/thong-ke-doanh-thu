<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ThongBaoVe extends Notification
{
    use Queueable;

    public $notices;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($notices)
    {
        //
        $this->notices = $notices;
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
        $lines = '';
        foreach ($this->notices as $line) {
            $lines .= '- ' . $line . '\n';
        }
        return (new MailMessage)
            ->line($lines)
            ->subject('Nhắc nhở thông tin vé máy bay - TIENVE.NET');
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
