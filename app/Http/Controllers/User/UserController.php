<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Ability;
use App\Models\Itembox;
use App\Models\Item;
use App\Models\Skilltree;
use App\Models\Skill;

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
        $itembox = Itembox::where('user_id', 1)->get();
        $items = [];
        foreach ($itembox as $i) {
            // $itemをEloquentModelから配列に変換 -> 末尾に"amount" => amountを追加
            $item = Item::where('id', $i->item_id)->first()->toArray();
            $item['amount'] = $i->amount;
            $items[] = $item;
        }

        return $items;
    }

    public function fetchSkill()
    {
        $skilltree = Skilltree::where('user_id', 1)->get();
        $skills = [];
        foreach ($skilltree as $s) {
            // $skillをEloquentModelから配列に変換
            $skill = Skill::where('id', $s->skill_id)->first()->toArray();
            $skills[] = $skill;
        }

        return $skills;
    }
}
