// Soldier
class Soldier {
  constructor (health, Strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.Strength;
  }

  receiveDamage(dano) {
    this.health -= dano;
  }
}

// Viking
class Viking extends Soldier {
  constructor (name, health, Strength){
    super(health, Strength, name)
    this.name = name;
  }

  receiveDamage(dano) {
    this.health -= dano;

    if (this.health > 0) {
      return `${this.name} has received ${dano} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }

}

// Saxon
class Saxon extends Soldier {
  receiveDamage(dano) {
    this.health -= dano;

    if (this.health > 0) {
      return `A Saxon has received ${dano} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }

}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  
  addViking(soldadoViking) {
    this.vikingArmy.push(soldadoViking);
  }

  addSaxon(soldadoSaxon) {
    this.saxonArmy.push(soldadoSaxon)

  }

  vikingAttack() {
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    this.saxonArmy[randomSaxon].receiveDamage(
      this.vikingArmy[randomViking].strength
    );

    if (this.saxonArmy[randomSaxon].health <= 0) {
      this.saxonArmy.splice([randomSaxon], 1);
      return 'A Saxon has died in combat';
    }

  }

  saxonAttack() {
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSaxon].strength
    );

    if (this.vikingArmy[randomViking].health <= 0) {
      this.vikingArmy.splice([randomViking], 1);
    } else {
      return `${this.vikingArmy[randomViking].name} has received ${this.saxonArmy[randomSaxon].strength} points of damage`;
    }

  }

  showStatus() {
    if (!this.vikingArmy.length) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (!this.saxonArmy.length) {
      return 'Vikings have won the war of the century!';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
