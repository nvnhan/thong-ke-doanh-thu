<?php

namespace App\Http\Controllers;

use Dacastro4\LaravelGmail\Facade\LaravelGmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class GmailController extends BaseController
{
    //
    public function getLogin()
    {
        return view('login-to-gmail');
    }

    /**
     * Post form to set auth cookie in browser
     */
    public function postLogin(Request $request)
    {
        $credential = $request->only(['username', 'password']);
        if (Auth::attempt($credential, true))
            return view('redirect-to-gmail');
        else return 'Login failed';
    }

    /**
     * If browser is authenticated, redirect to gmail OAuth
     */
    public function redirect(Request $request)
    {
        $user = $request->user;
        if (empty($user)) return redirect()->to('/');

        // In Web => Check user web login 
        if (auth()->user() && auth()->user()->username === $user)
            return LaravelGmail::redirect();
        else return redirect()->to('/oauth/login');
    }
}
