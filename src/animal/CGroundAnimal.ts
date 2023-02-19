import { IAnimal } from "./IAnimal";


export class CGroundAnimal implements IAnimal {
  total?: number;         // public and is optional variable.
  #total: number;         // Not accessible outside the class same as private
  color: string;  // Not accessible outside the class. compilation error if try to access after create the object
  name: string;           // default is public
  desc: string;           // Accessible by subclass only.          

  setName = (name: string): void => {
    this.name = name;
  };

  getName = (): string => {
    return this.name;
  }
  
  setDesc: (desc: string) => void;
  getDesc: () => string;

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
}