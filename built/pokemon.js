'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/****************************************************************************************************/
var Pokemon = /** @class */ (function () {
    /**************************************************/
    function Pokemon(name, level, health, attack, defense, speed, specialDefense, specialAttack) {
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
    Pokemon.prototype.isAttacked = function (damages) {
        this.currentHealth = this.currentHealth - damages < 0 ? 0 : this.currentHealth - damages;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
