'use strict'

import { Attack } from './attack';

/****************************************************************************************************/

class Pokemon
{
  name: string;
  level: number;
  currentHealth: number;
  maxHealth: number;
  attack: number;
  defense: number;
  speed: number;
  specialDefense: number;
  specialAttack: number;

  selfAttacks: Attack[];

  /**************************************************/

  constructor(name: string, level: number, health: number, attack: number, defense: number, speed: number, specialDefense: number, specialAttack: number)
  {
    this.name = name;
    this.level = level;
    this.maxHealth = health;
    this.currentHealth = health;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.specialDefense = specialDefense;
    this.specialAttack = specialAttack;
    this.selfAttacks = [];
  }

  /**************************************************/

  isAttacked(damages: number)
  {
    this.currentHealth = this.currentHealth - damages < 0 ? 0 : this.currentHealth - damages;
  }
}

/****************************************************************************************************/

export { Pokemon };
