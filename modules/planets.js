// Le module peut être n'importe qu'elle variable.
// une fonction ou encore un classe.
 let Planets = ["Terre", "Mars", "Saturne", "Venus"];


 /*export function Planets(){
    return ["Terre", "Mars", "Saturne", "Venus"];
 }*/
  class unePlanet{  
    constructor(aName){
        this.name=aName;
    }
    getName(){
        return this.name;
    }
    printName(){
        alert(this.name);
    }
}


export {Planets, unePlanet}
