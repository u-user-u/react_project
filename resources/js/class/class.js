import { actionState } from "../components/App";

// ==================================
// プレイヤークラス
// ==================================
export class Player {
  constructor(name, level, state, HP, maxHP, MP, maxMP, attack, defence, speed, intelligence, totalEXP, tmp_floor, record_floor) {
    this.name = name;
    this.level = level;
    this.state = state;
    this.HP = HP;
    this.maxHP = maxHP;
    this.MP = MP;
    this.maxMP = maxMP;
    this.attack = attack;
    this.defence = defence;
    this.speed = speed;
    this.intelligence = intelligence;
    this.totalEXP = totalEXP;
    this.tmp_floor = tmp_floor;
    this.record_floor = record_floor;
  }

  action(action, enemy, item = "none") {
    if (action == actionState.attack) {
      return countDamage(this, enemy);
    } else if (action == actionState.item) {
      return useItem(this, enemy, item);
    } else if (action == actionState.skill) {
      return useSkill(this, enemy);
    }
  }
}

// ==================================
// エネミークラス
// ==================================
export class Enemy {
  constructor(name, level, state, HP, MP, attack, defence, speed, intelligence, EXP) {
    this.name = name;
    this.level = level;
    this.state = state;
    this.HP = HP;
    this.MP = MP;
    this.attack = attack;
    this.defence = defence;
    this.speed = speed;
    this.intelligence = intelligence;
    this.EXP = EXP;
  }

  action(action, enemy) {
    return countDamage(this, enemy);
  }
}

// ==================================
// アイテムクラス
// ==================================
export class Item {
  constructor(name, type, value, amount) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.amount = amount;
  }
}

// ダメージ処理
function countDamage(who, target) {
  // ダメージ計算
  const damage = who.attack - target.defence;
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

function useItem(who, enemy, item) {
  who.HP += 20;
  if (who.maxHP <= who.HP) {
    who.HP = who.maxHP;
    return who.name + "は薬草を使った!\nHPが全快した!";
  }
  return who.name + "は薬草を使った!\nHPが20回復した!";
}

function useSkill(who, enemy) {
  const damage = who.intelligence;
  const useMP = 5;
  // MPが足りない場合
  if (who.MP < useMP) {
    return who.name + "はファイアを放った!\nしかしMPが足りなかった!";
  }
  // 通常発動
  else {
    // ダメージ,MP処理後、メッセージ表示
    enemy.HP -= damage;
    who.MP -= useMP;
    // デバッグ用ログ表示
    console.log("スキル発動\n" + enemy.name + "\nHP:" + enemy.HP);
    return who.name + "はファイアを放った!\n" + enemy.name + "に" + damage + "のダメージ!";
  }
}
