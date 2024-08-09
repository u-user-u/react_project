import { actionState } from "../components/App";
import * as lib from '../lib/lib';

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

  action(action, enemy, entity = "none") {
    if (action == actionState.attack) {
      return countDamage(this, enemy);
    } else if (action == actionState.item) {
      return useItem(this, enemy, entity);
    } else if (action == actionState.skill) {
      return useSkill(this, enemy, entity);
    }
  }

  // 経験値取得
  getEXP(enemy) {
    this.totalEXP += enemy.EXP;
    return "経験値を" + enemy.EXP + "獲得した!";
  }

  // レベルアップ判定
  // 変化前のレベルを返す
  updateLevel() {
    const tmp_level = this.level;
    // nextLevel^2 < totalEXP のとき、レベルアップし続ける
    for (this.level; (this.level + 1) * (this.level + 1) <= this.totalEXP; this.level++) {
      console.log(this.level);
    }
    console.log("レベルが" + this.level + "になった");
    return tmp_level;
  }

  // パラメータ処理
  // 変化前のプレイヤークラスを返す
  updateParameter(diff) {
    let up = 0;
    let upParam = [];
    for (let i = 0; i < 6; i++) {
      for (let t = 1; t <= diff; t++) {
        up += Math.ceil(Math.random() * 5);
      }
      upParam.push(up);
      up = 0
    }
    this.maxHP += upParam[0];
    this.maxMP += upParam[1];
    this.attack += upParam[2];
    this.defence += upParam[3];
    this.speed += upParam[4];
    this.intelligence += upParam[5];
    this.HP = this.maxHP;
    this.MP = this.maxMP;

    console.log(this);

    return "HP +" + upParam[0] + ", MP +" + upParam[1] + ", 攻撃力 +" + upParam[2] + ", 守備力 +" + upParam[3] + ", 素早さ +" + upParam[4] + ", 魔力 +" + upParam[5];
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

  action(action, enemy, entity = "none") {
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

// ==================================
// スキルクラス
// ==================================
export class Skill {
  constructor(name, type, value, useMP, detail) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.useMP = useMP;
    this.detail = detail;
  }
}

// ダメージ処理
function countDamage(who, target) {
  // ダメージ計算
  const damage = who.attack - Math.ceil(target.defence / 2);
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
  item.amount -= 1;
  console.log(item);
  if (item.type == "heal") {
    who.HP += item.value;
    if (who.maxHP <= who.HP) {
      who.HP = who.maxHP;
      return who.name + "は薬草を使った!\nHPが全快した!";
    }
    return who.name + "は薬草を使った!\nHPが" + item.value + "回復した!";
  }
}

function useSkill(who, enemy, skill) {
  const damage = who.intelligence * skill.value;
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
    return who.name + "は" + skill.name + "を放った!\n" + enemy.name + "に" + damage + "のダメージ!";
  }
}
