import { player, enemy } from '../class/instance';

// 素早さ順にソート
export function sortCharacter(chara1, chara2) {
  let character = [chara1, chara2];
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
    return "BATTLE";
  }
}
