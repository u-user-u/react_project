<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Controllers\User\AbilityController;
use App\Models\Ability;
use App\Models\Itembox;

class UserController extends Controller
{
    public function fetchUser()
    {
        $user = User::query()->where('id', 1)->first();
        $ability = $this->fetchAbility();
        $item = $this->fetchItem();

        return view('app')
            ->with('user', $user)
            ->with('ability', $ability)
            ->with('item', $item);
    }

    public function fetchAbility()
    {
        $ability = Ability::where('user_id', 1)->first();

        return $ability;
    }

    public function fetchItem()
    {
        $item = Itembox::where('user_id', 1)->get();

        return $item;
    }
}
