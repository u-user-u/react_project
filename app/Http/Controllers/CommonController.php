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
use App\Models\User;

class CommonController extends Controller
{
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
}
