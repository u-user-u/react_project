<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Ability;
use App\Models\Itembox;
use App\Models\Item;
use App\Http\Controllers\Enemy\EnemyController;

class UserController extends Controller
{
    public function fetchUser()
    {
        $user = User::query()->where('id', 1)->first();

        return $user;
    }

    public function fetchAbility()
    {
        $ability = Ability::where('user_id', 1)->first();

        return $ability;
    }

    public function fetchItem()
    {
        $items = [];
        $itembox = Itembox::where('user_id', 1)->get();
        foreach ($itembox as $i) {
            $item = Item::where('id', $i->id);
            $items[] = $item;
        }

        return $items;
    }
}
