'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************************************************************************/
function startFight(firstOpponent, secondOpponent) {
    console.log("A fight begins between " + firstOpponent.name + " and " + secondOpponent.name);
    while (firstOpponent.currentHealth > 0 && secondOpponent.currentHealth > 0) {
        console.log('');
        console.log(firstOpponent.name + "'s life : " + firstOpponent.currentHealth + "/" + firstOpponent.maxHealth + " HP");
        console.log(secondOpponent.name + "'s life : " + secondOpponent.currentHealth + "/" + secondOpponent.maxHealth + " HP");
        console.log('');
        if (firstOpponent.speed > secondOpponent.speed) {
            pokemonIsAttacking(firstOpponent, secondOpponent);
            if (secondOpponent.currentHealth === 0) {
                console.log('');
                console.log(secondOpponent.name + " fainted !");
                console.log(firstOpponent.name + " wins !");
                return;
            }
            pokemonIsAttacking(secondOpponent, firstOpponent);
            if (firstOpponent.currentHealth === 0) {
                console.log('');
                console.log(firstOpponent.name + " fainted !");
                console.log(secondOpponent.name + " wins !");
                return;
            }
        }
        else {
            pokemonIsAttacking(secondOpponent, firstOpponent);
            if (firstOpponent.currentHealth === 0) {
                console.log(firstOpponent.name + " fainted !");
                console.log(secondOpponent.name + " wins !");
                return;
            }
            pokemonIsAttacking(firstOpponent, secondOpponent);
            if (secondOpponent.currentHealth === 0) {
                console.log(secondOpponent.name + " fainted !");
                console.log(firstOpponent.name + " wins !");
                return;
            }
        }
    }
}
exports.startFight = startFight;
/****************************************************************************************************/
function pokemonIsAttacking(attackingPokemon, attackedPokemon) {
    var damages = Math.floor(Math.floor(Math.floor((2 * attackingPokemon.level) / (5 + 2)) * attackingPokemon.attack * attackingPokemon.selfAttacks[0].power / attackedPokemon.defense) / 50) + 2;
    console.log(attackingPokemon.name + " uses " + attackingPokemon.selfAttacks[0].name + " on " + attackedPokemon.name + " and does " + damages + " damages !");
    attackedPokemon.isAttacked(damages);
}
