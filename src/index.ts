'use strict'

import { Attack } from './attack';
import { Pokemon } from './pokemon';

import { startFight } from './fight';

/****************************************************************************************************/

const pikachu = new Pokemon('Pikachu', 1, 35, 55, 40, 90, 50, 50);
const bulbasaur = new Pokemon('Bulbasaur', 1, 45, 49, 49, 45, 65, 65);

const tackle = new Attack('tackle', 40, 100);
const vineWhip = new Attack('vine whip', 45, 100);

pikachu.selfAttacks.push(tackle);
bulbasaur.selfAttacks.push(vineWhip);

startFight(pikachu, bulbasaur);

/****************************************************************************************************/
