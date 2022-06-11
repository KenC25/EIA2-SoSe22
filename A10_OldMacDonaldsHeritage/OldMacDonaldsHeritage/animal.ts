namespace Aufgabe10_1{

//  Create class animal

        export class animal {
            type: string;
            foodType: string;
            foodAmount: number;
            animalSound: string;
        
        constructor (_type: string, _foodType: string, _foodAmount: number, _animalSound: string){
            this.type = _type;
            this.foodType = _foodType;
            this.foodAmount = _foodAmount;
            this.animalSound = _animalSound;
        }

        createSong(): void{
            console.log(`Old MacDonald has a farm eieio and on his farm he has a ${this.type} eieio with a ${this.animalSound} ${this.animalSound} here and a ${this.animalSound} ${this.animalSound} there, here a ${this.animalSound}, there a ${this.animalSound}, everywhere a ${this.animalSound} ${this.animalSound}.`);
        }
        
        eating(): void{
            console.log(`After singing the ${this.type} is hungry. The ${this.type} eats everyday ${this.foodAmount} amount of ${this.foodType}.`);
        }

        doSpecialAction(): void{}

        }
}