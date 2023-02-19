/*
1 - interface: to describe shape of objects, to be extended by others
2 - boolean, string, number, undefined, null, any, unknown, never, 
    void, bigint, symbol: built-in Type primitives
3 - Date, Error, Array, Map. Set, ReqExp, Promise: common built-in JS objects
4 - Object, Function, Arrays, Tuple: type literals.
*/
export interface IAnimal {
  name: string;  
  total?: number;
  readonly desc: string; //this prefix readonly has not effect at class that implements interface type
  color: string;

  setName: (name: string) => void;
  getName: () => string;

  setColor: (color: string) => void;
  getColor: () => string;

  setTotal(total: number): void;
  getTotal: () => number;

  setDesc: (desc: string) => void;
  getDesc: () => string;
}