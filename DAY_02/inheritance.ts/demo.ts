class Animal{
    constructor(feed: string, animalType: string){
        console.log(feed, '::' , animalType);
        
    }
}

class cat extends Animal{
    constructor(feed: string, animalType: string){
        super(feed, animalType)
        
    }
}


class Dog extends Animal{
    constructor(feed: string, animalType: string){
        super(feed, animalType)
        
    }
}

