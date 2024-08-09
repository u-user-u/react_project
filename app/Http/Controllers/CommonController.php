<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Enemy\EnemyController;
use App\Http\Controllers\User\UserController;

class CommonController extends Controller
{
    public function fetchData($name)
    {
        // ユーザーコントローラーインスタンス化
        $useCon = new UserController;
        // ユーザー情報フェッチ処理
        $user = $useCon->fetchUser($name);
        $ability = $useCon->fetchAbility($user->id);
        $items = $useCon->fetchItem($user->id);
        $skills = $useCon->fetchSkill($user->id);

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
            ->with('skills', $skills);
    }

    public function showTitle()
    {
        return view('title');
    }

    // 登録処理、後日実装予定
    public function registerUser(Request $request)
    {
        return redirect('/app');
    }

    // ロード処理、後日実装予定
    public function loadUser(Request $request)
    {
        return $this->fetchData($request->input('name'));
    }
}
