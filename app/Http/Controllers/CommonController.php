<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Enemy\EnemyController;
use App\Http\Controllers\User\UserController;
use App\Models\Ability;
use App\Models\Equipment;
use App\Models\Equipmentbox;
use App\Models\Item;
use App\Models\Itembox;
use App\Models\Skill;
use App\Models\Skilltree;
use App\Models\User;
use Illuminate\Foundation\Auth\User as AuthUser;

class CommonController extends Controller
{
    // プレイヤー情報取得
    public function fetchData($user)
    {
        // ユーザーコントローラーインスタンス化
        $useCon = new UserController;
        // ユーザー情報フェッチ処理（ユーザー以外）
        $ability = $useCon->fetchAbility($user->id);
        $items = $useCon->fetchItem($user->id);
        $skills = $useCon->fetchSkill($user->id);
        $equipments = $useCon->fetchEquipment($user->id);

        //エネミーコントローラーインスタンス化
        $eneCon = new EnemyController;
        // 敵情報フェッチ処理
        $enemy = $eneCon->fetchEnemy();
        $e_ability = $eneCon->fetchEnemyAbility();

        return view('app')
            ->with('user', $user)
            ->with('ability', $ability)
            ->with('enemy', $enemy)
            ->with('enemyability', $e_ability)
            ->with('items', $items)
            ->with('skills', $skills)
            ->with('equipments', $equipments);
    }

    // タイトル表示
    public function showTitle()
    {
        return view('title')->with('message', "");
    }

    // 登録処理
    public function registerUser(Request $request)
    {
        $useCon = new UserController;
        $auth = $useCon->fetchUser($request->input('name'), $request->input('password'));
        if (!empty($auth)) {
            return redirect()->back()
                ->with('message', 'そのユーザー名は既に使われています');
        } else {
            // ユーザー登録
            $user = new User();
            $user->name = $request->input('name');
            $user->password = $request->input('password');
            $user->save();

            // ユーザー能力生成
            $ability = new Ability();
            $ability->user_id = $user->id;
            $ability->save();

            // 初期アイテム生成
            $itembox = new Itembox();
            $itembox->user_id = $user->id;
            $itembox->item_id = 1;
            $itembox->amount = 5;
            $itembox->save();

            // 初期装備生成
            for ($i = 1; $i <= 3; $i++) {
                $equipmentbox = new Equipmentbox();
                $equipmentbox->user_id = $user->id;
                $equipmentbox->equipment_id = $i;
                $equipmentbox->wearing = 1;
                $equipmentbox->save();
            }

            return $this->fetchData($user);
        }
    }

    // ロード処理
    public function loadUser(Request $request)
    {
        // 認証機能
        $useCon = new UserController;
        $user = $useCon->fetchUser($request->input('name'), $request->input('password'));
        if (!empty($user)) {
            return $this->fetchData($user);
        } else {
            return redirect()->back()
                ->with('message', "ユーザーが見つかりませんでした");
        }
    }

    // セーブ処理
    public function saveData(Request $request)
    {
        $player = explode(',', $request->player);
        $items = explode(',', $request->items);
        $skills = explode(',', $request->skills);
        $equipments = explode(',', $request->equipments);

        // 配列のインデックスを指定してDBに格納していく
        // usersテーブル
        $user = User::where('name', $player[0])->first();
        $user->tmp_floor = $player[12];
        $user->record_floor = $player[13];
        $user->save();

        // abilitiesテーブル
        $ability = Ability::where('user_id', $user->id)->first();
        $ability->level = $player[1];
        $ability->state = $player[2];
        $ability->tmp_HP = $player[3];
        $ability->max_HP = $player[4];
        $ability->tmp_MP = $player[5];
        $ability->max_MP = $player[6];
        $ability->attack = $player[7];
        $ability->defence = $player[8];
        $ability->speed = $player[9];
        $ability->intelligence = $player[10];
        $ability->totalEXP = $player[11];
        $ability->save();

        // itemboxesテーブル
        for ($i = 0; $i < count($items); $i++) {
            if ($i % 2 == 0) {
                $item = Item::where('name', $items[$i])->first();
                $itemdata = Itembox::where('user_id', $user->id)->where('item_id', $item->id)->first();
                if (empty($itemdata)) {
                    $itemdata = new Itembox();
                    $itemdata->user_id = $user->id;
                    $itemdata->item_id = $item->id;
                };
                $itemdata->amount = $items[$i + 1];
                $itemdata->save();
            }
        };

        // skilltreesテーブル
        for ($i = 0; $i < count($skills); $i++) {
            $skill = Skill::where('name', $skills[$i])->first();
            $skilldata = Skilltree::where('user_id', $user->id)->where('skill_id', $skill->id)->first();
            if (empty($skilldata)) {
                $skilldata = new Skilltree();
                $skilldata->user_id = $user->id;
                $skilldata->skill_id = $skill->id;
                $skilldata->save();
            }
        };

        // equipmentboxesテーブル
        for ($i = 0; $i < count($equipments); $i++) {
            if ($i % 2 == 0) {
                $equipment = Equipment::where('name', $equipments[$i])->first();
                $equipmentdata = Equipmentbox::where('user_id', $user->id)->where('equipment_id', $equipment->id)->first();
                if (empty($equipmentdata)) {
                    $equipmentdata = new Equipmentbox();
                    $equipmentdata->user_id = $user->id;
                    $equipmentdata->equipment_id = $equipment->id;
                };
                $equipmentdata->wearing = $equipments[$i + 1];
                $equipmentdata->save();
            }
        }

        return redirect('');
    }
}
