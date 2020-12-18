<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;
use App\Helpers\NotifyMail;
use App\KhachHang;

class SendNotify extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notify:thongbaove';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send VE MAY BAY notifications to users';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $users = User::whereNotNull('email')->whereThongBao(true)->get();
        $khach_hang = KhachHang::whereNotNull('email')->get();
        $cnt = 0;
        foreach ($users as $user)
            if (NotifyMail::checkUser($user)) $cnt++;
        foreach ($khach_hang as $kh)
            if (NotifyMail::checkCustomer($kh)) $cnt++;

        $this->info("$cnt emails sent");
    }
}
