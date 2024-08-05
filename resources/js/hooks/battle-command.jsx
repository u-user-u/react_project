import { useState } from "react";

export const commandState = {
  initial: 'INITIAL',
  attack: 'ATTACK',
  skill: 'SKILL'
};

export const useStateCommand = (props) => {
  const [state, setState] = useState(commandState.initial);

}
