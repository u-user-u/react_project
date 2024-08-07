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
}
