<?php

namespace App;

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
        'dai_ly', 'sdt', 'dia_chi', 'email', 'thong_bao',
        'ct_ten', 'ct_sdt', 'ct_fax', 'ct_email', 'ct_dia_chi', 'ct_mst',
        'ngay_het_han', 'actived', 'phan_quyen',
        'tour_visa', 'ban_hang', 'extension',
        'khong_gioi_han_dang_nhap', 'so_ngay_dang_nhap',
        'so_ket_qua'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'id_nguoi_tao', 'user_zone', 'nguoi_tao', 'tao_ra'
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
        'extension' => "boolean",
        'thong_bao' => "boolean",
        'khong_gioi_han_dang_nhap' => "boolean",
        'ngay_het_han' => 'datetime:d/m/Y',
        'ngay_dang_nhap' => 'datetime:d/m/Y',
        'created_at' => 'datetime:d/m/Y',
        'updated_at' => 'datetime:H:i d/m/Y',
        'user_zone' => 'array'
    ];

    protected $appends = ['admin', 'quan_ly', 'quan_tri', 'quyen', 'chuc_nang', 'tags'];

    public function nguoi_tao()
    {
        return $this->belongsTo('App\User', 'id_nguoi_tao');
    }

    public function tao_ra()
    {
        return $this->hasMany('App\User', 'id_nguoi_tao');
    }
    /**
     * Quyền admin
     */
    public function getAdminAttribute()
    {
        return $this->phan_quyen === 9;
    }

    /**
     * Quyền quản lý 
     */
    public function getQuanLyAttribute()
    {
        return $this->phan_quyen >= 1;
    }

    public function getQuanTriAttribute()
    {
        return $this->phan_quyen >= 2;
    }

    public function getChucNangAttribute()
    {
        return $this->phan_quyen < 9;
    }

    public function getQuyenAttribute()
    {
        switch ($this->phan_quyen) {
            case '9':
                return 'Quản trị hệ thống';
                break;
            case '2':
                return 'Chủ đại lý';
                break;
            case '1':
                return 'Quản lý đại lý';
                break;
            default:
                return 'Nhân viên';
                break;
        }
    }

    public function getUserZone()
    {
        return $this->user_zone;
    }

    public function setUserZone()
    {
        $user = $this;
        $users = [];
        if ($user->phan_quyen === 1) // Nếu lá Quản lý đại lý
            $user = $user->nguoi_tao()->first();      // Người tạo:  admin hoặc chủ đl

        if ($user->phan_quyen === 0 || $user->phan_quyen === 9)      // Nhân viên & admin
            $users = [$user->username];
        else
            $users = $user->tao_ra()->pluck('username')->push($user->username);
        $this->user_zone = $users;
    }

    public function getTagsAttribute()
    {
        $tags = [];
        if ($this->tour_visa) $tags[] = "Tour - Visa";
        if ($this->ban_hang) $tags[] = "Bán hàng";
        if ($this->extension) $tags[] = "Tool";
        return $tags;
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
