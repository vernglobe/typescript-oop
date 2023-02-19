import { IAnimal } from "./IAnimal";


export class CGroundAnimal implements IAnimal {
  total?: number;         // public and is optional variable.
  
  color: string;  
  name: string;           // default modifier is public
  desc: string;           // Accessible by subclass only.   
  
  #total: number;              // Not accessible outside the class same as private modifier.
  private numberOfLeg: number; // Not accessible outside the class. compilation error if try to access after create the object

  setDesc = (desc: string): void => {
    throw new Error("Method not implemented!");
  };

  getDesc = ():string => {
    return this.desc;
  };

  setName = (name: string): void => {
    this.name = name;
  };

  getName = (): string => {
    return this.name;
  }
  
  setTotal(total: number): void {
    this.#total = total;
  }

  getTotal(): number {
    return this.#total;
  }

  setColor = (color: string): void => {
    this.color = color;
  }

  getColor = (): string => {
    return this.color;
  }

  setNumberOfLeg(numberOfLeg: number): void {
    this.numberOfLeg = numberOfLeg;
  }

  getNumberOfLeg(): number {
    return this.numberOfLeg;
  }
}