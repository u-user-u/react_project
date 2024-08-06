import { useState } from "react";

const battleState = {
  player: "PLAYER",
  enemy: "ENEMY",
  select: "SELECT"
};

// １ターン
async function battle() {
  const [state, setState] = useState(battleState.select);

  // 勝敗フラグ
  let winLose = "none";

  for (let c of characters) {
    await sleep(1000);

    // 各キャラクターの行動
    c.action();

    await sleep(1000);

    updateParameter();

    await sleep(1000);

    // 勝敗の判定をする
    winLose = judgeWinLose();

    // 敗北した場合
    if (winLose === "lose" || winLose === "win") {
      return false;
    }
  }
  return true;
}

// msミリ秒スリープする
function sleep(ms) {
  return new Promise(
    function (resolve) {
      // msミリ秒スリープする
      setTimeout(resolve, ms);
    }
  );
}
