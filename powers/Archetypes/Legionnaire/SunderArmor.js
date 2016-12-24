exports.power = {
  name: "Sunder Armor", //name of power (REQUIRED)
  archetype: "Legionnaire", //if belongs by an archetype enter discipline name, otherwise false
  discipline: false, //if belongs by a discipline enter discipline name, otherwise false
  bar: "Primary", //Primary, Secondary, Primary, etc
  type: "Attack", //Buff, Attack, Passive, Ultimate, etc
  cast_time: "Instant", //time to cast, can also be "instant"
  duration: false, //duration of power, false if not specified
  lifetime: false, //this is the travel time on ranged powers (fireballs), false if not specified
  target: "Cone", //impact design for the power (sphere/reticle,etc), false if nothing listed.
  velocity: false, //how fast some ranged powers travel, false if not specified
  range: "7 Meters", //how far it travels, this is a string ("3 meters" or "3M/S) (false if not specified)
  cost: "15 Rage", //localized cost to archetype (energy, rage, mana, etc), false if not listed.
  tooltip: "Swipe in front of you twice for 487 - 595 + 54% Weapon Damage. Applies an Armor Break to all hit, which reduces all Physical Mitigation by 20% for 15 seconds.", //full description of power (REQUIRED)
  icon: false, //we'll grab these later on. leave false for now.
};
