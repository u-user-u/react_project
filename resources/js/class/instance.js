import { Player, Enemy } from './class';

// ===================================================
// データベース連携
// ===================================================
// user情報取得->文字列置換->文字列からオブジェクトへ変換
// userは変数とする
export let u = JSON.parse(user.replace(/&quot;/g, '"'));
console.log(u);
// abilityも同様
export let a = JSON.parse(ability.replace(/&quot;/g, '"'));
console.log(a);
export let e = JSON.parse(enemies.replace(/&quot;/g, '"'));
console.log(e);
export let ea = JSON.parse(enemyAbility.replace(/&quot;/g, '"'));
console.log(ea);

// ===================================================
// インスタンス化
// ===================================================
export let player = new Player(u.name, a.level, a.state, a.tmp_HP, a.max_HP, a.tmp_MP, a.max_MP, a.attack, a.defence, a.speed, a.intelligence, a.totalEXP, u.tmp_floor, u.record_floor);

export let enemy = new Enemy(e.name, player.tmp_floor, null, ea.HP, ea.MP, ea.attack, ea.defence, ea.speed, ea.intelligence, ea.EXP);

console.log(player);
console.log(enemy);
