import { Player, Enemy, Item, Skill, Equipment } from './class';

// ===================================================
// データベース連携
// ===================================================
// ユーザー情報取得->文字列置換->文字列からオブジェクトへ変換
// uは変数とする
export const u = JSON.parse(user.replace(/&quot;/g, '"'));
// abilityも同様
export const a = JSON.parse(ability.replace(/&quot;/g, '"'));
export const e = JSON.parse(enemies.replace(/&quot;/g, '"'));
export const ea = JSON.parse(enemyAbility.replace(/&quot;/g, '"'));
export const items = JSON.parse(stritembox.replace(/&quot;/g, '"'));
export const skills = JSON.parse(strskilltree.replace(/&quot;/g, '"'));
export const equipments = JSON.parse(strequipmentbox.replace(/&quot;/g, '"'));
export const allskill = JSON.parse(strallskill.replace(/&quot;/g, '"'));
export const allitem = JSON.parse(strallitem.replace(/&quot;/g, '"'));
export const allequipment = JSON.parse(strallequipment.replace(/&quot;/g, '"'));

// ===================================================
// インスタンス化
// ===================================================
// プレイヤー
export let player = new Player(u.name, a.level, a.state, a.tmp_HP, a.max_HP, a.tmp_MP, a.max_MP, a.attack, a.defence, a.speed, a.intelligence, a.totalEXP, u.tmp_floor, u.record_floor);

// エネミー
export let enemy = new Enemy(e.name, player.tmp_floor, null, ea.HP, ea.MP, ea.attack, ea.defence, ea.speed, ea.intelligence, ea.EXP);

// アイテムボックス
export let itembox = items.map((i) => new Item(i.name, i.type, i.value, i.amount));

// スキルツリー
export let skilltree = skills.map((s) => new Skill(s.name, s.type, s.value, s.required, s.detail, s.rate));

// すべてのスキルデータ
export let allSkill = allskill.map((s) => new Skill(s.name, s.type, s.value, s.required, s.detail, s.rate));

// すべてのアイテムデータ
export let allItem = allitem.map((i) => new Item(i.name, i.type, i.value, 1));

// すべての装備データ
export let allEquipment = allequipment.map((e) => new Equipment(e.name, e.type, e.attack, e.defence, e.speed, e.intelligence, 0));

// 装備ボックス
export let equipmentbox = equipments.map((e) => new Equipment(e.name, e.type, e.attack, e.defence, e.speed, e.intelligence, e.wearing));

console.log(player);
console.log(enemy);
console.log(itembox);
console.log(skilltree);
console.log(equipmentbox);
