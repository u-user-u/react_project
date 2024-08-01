<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function fetchUser()
    {
        $user = User::query()->where('id', 1)->first();

        return view('app')->with('user', $user);
    }
}
