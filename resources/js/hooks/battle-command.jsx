import { useState } from "react";

export const commandState = {
  initial: 'INITIAL',
  attack: 'ATTACK',
  skill: 'SKILL'
};

export const useStateCommand = () => {
  // コマンドステート
  const [state, setCommand] = useState(commandState.initial);
}

// １ターン
async function battle() {
  let winLose = "";
  await sleep(1000);

  player.onAction();

  await sleep(1000);
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
