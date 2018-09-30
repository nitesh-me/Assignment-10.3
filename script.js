class Dog{
    constructor(name){
        this.name = name;

    }
    speak(){
        return "woof";
    }
}

class Labrador extends Dog{
    constructor(color, breedWeight){
        super();
        this.color= color;
        this.breedWeight= breedWeight;
    }
    speak(){
        return "Labrador says WOOF";
    }
}

var ab = new Labrador("red","german-sepherd");
ab.speak();
console.log(ab.speak());