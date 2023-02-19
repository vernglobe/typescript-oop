import { IAnimal } from "./IAnimal";


export class CWaterAnimal implements IAnimal {
  color: string;
  setColor: (color: string) => void;
  getColor: () => string;
  name: string;
  total?: number;
  desc: string;
  setName: (name: string) => void;
  getName: () => string;
  setTotal(total: number): void {
    throw new Error("Method not implemented.");
  }
  getTotal: () => number;
  setDesc: (desc: string) => void;
  getDesc: () => string;
  
}