import { CGroundAnimal } from "./CGroundAnimal";


export class CCat extends CGroundAnimal {
  private readonly sound: string = "miao miao";

  getSound(): string {
    return this.sound;
  }
}