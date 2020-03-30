<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TaiKhoan extends Model
{
    //
    protected $table = "tai_khoan";
    public $timestamps = false;
    // protected $dateFormat = 'd/m/Y';
    protected $casts = [
        'ngay_tao' => 'date:d/m/Y'
    ];

    public static function boot()
    {
        parent::boot();
        self::creating(function($model) {
            $model->ngay_thang = now(); //date("Y-m-d");
            $model->so_luong = 1;
            // $model->username = xxx;
        });
        self::updating(function($model) {

        });
        self::deleting(function($model) {

        });
    }

    public function hang_hoas()
    {
        return $this->hasMany('App\HangHoa', 'id_tai_khoan');
    }

}
