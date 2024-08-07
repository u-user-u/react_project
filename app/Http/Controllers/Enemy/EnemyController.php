<?php

namespace App\Http\Controllers\Enemy;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Enemy;
use App\Models\Enemies_ability;

class EnemyController extends Controller
{
    public function fetchEnemy()
    {
        // ここに乱数を用いてランダムに敵をfetchする機能を追加する

        $enemy = Enemy::where('id', 1)->first();

        return $enemy;
    }

    public function fetchEnemyAbility()
    {
        $e_ability = Enemies_ability::where('enemy_id', 1)->first();

        return $e_ability;
    }
}
