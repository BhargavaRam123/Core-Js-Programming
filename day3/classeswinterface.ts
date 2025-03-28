interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
    stop(): void;
  }
  
  class Car implements Vehicle {
    // Must include all properties and methods from Vehicle
    make: string;
    model: string; 
    year: number;
    
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    
    start(): void {
      console.log("Engine started");
    }
    
    stop(): void {
      console.log("Engine stopped");
    }
    
    // You can add additional methods/properties
    honk(): void {
      console.log("Beep beep!");
    }
  }

  const obj = new Car("tesla","x",2011)

  obj.honk()
  console.log(obj.model)