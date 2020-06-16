<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'ho_ten', 'username', 'password',
        'dai_ly', 'sdt', 'dia_chi',
        'ct_ten', 'ct_sdt', 'ct_fax', 'ct_email', 'ct_dia_chi', 'ct_mst',
        'ngay_het_han', 'actived', 'phan_quyen',
        'tour_visa', 'ban_hang'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'id_nguoi_tao'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'actived' => "boolean",
        'tour_visa' => "boolean",
        'ban_hang' => "boolean",
        'ngay_het_han' => 'datetime:d/m/Y',
        'created_at' => 'datetime:d/m/Y',
        'updated_at' => 'datetime:H:i d/m/Y',
    ];

    protected $appends = ['admin', 'quan_ly', 'quyen', 'chuc_nang'];

    public function getAdminAttribute()
    {
        return $this->phan_quyen === 9;
    }

    public function getQuanLyAttribute()
    {
        return $this->phan_quyen >= 1;
    }

    public function getChucNangAttribute()
    {
        return $this->phan_quyen <= 1;
    }

    public function getQuyenAttribute()
    {
        switch ($this->phan_quyen) {
            case '9':
                return 'Quản trị';
                break;
            case '1':
                return 'Đại lý';
                break;
            default:
                return 'Nhân viên';
                break;
        }
    }


    /**
     * Find the user instance for the given username.
     *
     * @param  string  $username
     * @return \App\User
     */
    public function findForPassport($username)
    {
        return $this->where('username', $username)->first();
    }
}
