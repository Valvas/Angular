'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var attack_1 = require("./attack");
var pokemon_1 = require("./pokemon");
var fight_1 = require("./fight");
/****************************************************************************************************/
var pikachu = new pokemon_1.Pokemon('Pikachu', 1, 35, 55, 40, 90, 50, 50);
var bulbasaur = new pokemon_1.Pokemon('Bulbasaur', 1, 45, 49, 49, 45, 65, 65);
var tackle = new attack_1.Attack('tackle', 40, 100);
var vineWhip = new attack_1.Attack('vine whip', 45, 100);
pikachu.selfAttacks.push(tackle);
bulbasaur.selfAttacks.push(vineWhip);
fight_1.startFight(pikachu, bulbasaur);
