// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage; 
  }
  }
  

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }  
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health >= 1){
      return console.log(`${this.name} has received ${damage} points of damage`);
    } else {
      return console.log(`${this.name} has died in act of combat`);
    } 
  }
battleCry(){
  return "Odin Owns You All!";
  } 
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage;
    if(this.health >= 1){
      return console.log(`A Saxon has received ${damage} points of damage`);
    } else {
      return console.log(`A Saxon has died in combat`);
    }
  }
}

// War
class War {
  constructor(vikingArmy, saxonArmy){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push();
  } 
  addSaxon(Saxon) {
    this.saxonArmy.push();
  }
  vikingAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let attackedSaxon = this.saxonArmy[randomSaxon];
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let vikingAttack = this.saxonArmy[randomViking];
    let attackReturn = attackedSaxon.receiveDamage(vikingAttack.attack());
    if(attackedSaxon.health <= 0) {
      this.saxonArmy.filter(sax => sax.health > 0);  
    }
    return attackReturn;
  }
  saxonAttack() {
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let attackedViking = this.vikingArmy[randomViking];
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let saxonAttack = this.saxonArmy[randomSaxon];
    let attackReturn = attackedViking.receiveDamage(saxonAttack.attack());
    this.vikingArmy = this.vikingArmy.filter(vik => this.vik.health > 0);
    return attackReturn;
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}


