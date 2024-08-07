import { Player, Enemy } from './class';

// ===================================================
// データベース連携
// ===================================================
// ユーザー情報取得->文字列置換->文字列からオブジェクトへ変換
// uは変数とする
export let u = JSON.parse(user.replace(/&quot;/g, '"'));
// abilityも同様
export let a = JSON.parse(ability.replace(/&quot;/g, '"'));
export let e = JSON.parse(enemies.replace(/&quot;/g, '"'));
export let ea = JSON.parse(enemyAbility.replace(/&quot;/g, '"'));

// ===================================================
// インスタンス化
// ===================================================
export let player = new Player(u.name, a.level, a.state, a.tmp_HP, a.max_HP, a.tmp_MP, a.max_MP, a.attack, a.defence, a.speed, a.intelligence, a.totalEXP, u.tmp_floor, u.record_floor);

export let enemy = new Enemy(e.name, player.tmp_floor, null, ea.HP, ea.MP, ea.attack, ea.defence, ea.speed, ea.intelligence, ea.EXP);

console.log(player);
console.log(enemy);
