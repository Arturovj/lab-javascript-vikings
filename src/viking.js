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
  constructor(name, health,strength){
    super (name, health, strength) 
     this.name = name;
     this.health = health;
     this.strength = strength;
  }
  receiveDamage(damage){
   this.health -= damage;
 if( this.health > 0 ){
 return `${this.name} has received ${damage} points of damage`
       }
 return `${this.name} has died in act of combat`
       }
 battleCry(){
 return "Odin Owns You All!"
}}

// Saxon
class Saxon extends Soldier {
  
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health>0) {
  return `A Saxon has received ${damage} points of damage`}
 return `A Saxon has died in combat`
}
  }

// War
class War {
  constructor(){
 this.vikingArmy = [];
 this.saxonArmy = [];


  }

  addViking(Viking){
    this.vikingArmy.push(Viking)
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }


// need to take a saxon/viking


saxonAttack(){
  const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  let result = randomViking.receiveDamage(randomSaxon.attack());
  if(randomViking.health <= 0){
    this.vikingArmy.splice(randomSaxon, 1);
  }
  return result;
}

vikingAttack(){
  const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
  const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
  let result = randomSaxon.receiveDamage(randomViking.attack());
  if(randomSaxon.health <= 0){
    this.saxonArmy.splice(randomSaxon, 1);
  }
  return result;
}


  showStatus () {
    if (this.saxonArmy.length === 0) 
        return "Vikings have won the war of the century!";
    else if (this.vikingArmy.length === 0) 
        return "Saxons have fought for their lives and survived another day...";
    else if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) 
        return "Vikings and Saxons are still in the thick of battle.";
  }

  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
