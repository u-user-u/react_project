import { player, enemy } from '../class/instance';

// ダメージ計算等、キャラクターのパラメータ処理

// ダメージ処理
export function countDamage(who, target) {
  // ダメージ計算
  let damage = who.attack - target.defence;
  // ダメージが0以下の場合、ダメージ処理をせずメッセージ表示
  if (damage <= 0) {
    return who.name + "の攻撃!\nしかし" + target.name + "にダメージを与えられない！";
  }
  // ダメージが1以上の場合
  else {
    // ダメージ処理後、メッセージ表示
    target.HP -= damage;
    // デバッグ用ログ表示
    console.log(target.name + "\nHP:" + target.HP);
    return who.name + "の攻撃!\n" + target.name + "に" + damage + "のダメージ！";
  }
}

// 素早さ順にソート
export function sortCharacter() {
  let character = [player, enemy];
  character.sort((a, b) => b.speed - a.speed);
  return character;
}
console.log(sortCharacter());

// 勝敗決定
export function judgeWinLose() {
  if (player.HP <= 0) {
    return "LOSE";
  } else if (enemy.HP <= 0) {
    return "WIN";
  } else {
    return;
  }
}
