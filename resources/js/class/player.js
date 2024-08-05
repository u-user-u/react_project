class Player {
  constructor(name, level, state, tmpHP, maxHP, tmpMP, maxMP, attack, defence, speed, intelligence, totalEXP) {
    this.name = name;
    this.level = level;
    this.state = state;
    this.tmpHP = tmpHP;
    this.maxHP = maxHP;
    this.tmpMP = tmpMP;
    this.maxMP = maxMP;
    this.attack = attack;
    this.defence = defence;
    this.speed = speed;
    this.intelligence = intelligence;
    this.totalEXP = totalEXP;
  }

  // 表示用パラメーターを返す
  getParameter() {
    return { name: this.name, level: this.level, tmpHP: this.tmpHP, maxHP: this.maxHP, tmpMP: this.tmpMP, maxMP: this.maxMP }
  }
}
