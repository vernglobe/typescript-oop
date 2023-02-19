import { CGroundAnimal } from "./CGroundAnimal";


export class CCat extends CGroundAnimal {
  private readonly sound: string = "miao miao"; // Not accessible outside the class.

  getSound(): string {
    return this.sound;
  }
}