<?php

namespace App\Http\Controllers;

use Dacastro4\LaravelGmail\Facade\LaravelGmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class GmailController extends BaseController
{
    /**
     * Post form to set auth cookie in browser
     */
    public function login(Request $request)
    {
        $credential = $request->only(['username', 'password']);
        if (Auth::attempt($credential)) {
            $user_id = $request->user()->id;        // ~ auth()->user()->id
            $disk = Storage::disk('local');
            $file = "gmail/tokens/gmail-json-$user_id.json";
            // Delete old token file
            if ($disk->exists($file)) $disk->delete($file);

            // Set auth cookie to browser
            // Then redirect to gmail login
            return view('redirect-to-gmail');
        } else return 'Login failed';
    }

    /**
     * If browser is authenticated, redirect to gmail OAuth
     */
    public function redirect()
    {
        // In Web => Check user web login 
        if (auth()->user())
            return LaravelGmail::redirect();
        else return 'Authenticate failed';
    }
}
