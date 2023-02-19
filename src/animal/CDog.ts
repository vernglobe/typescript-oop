import { CGroundAnimal } from "./CGroundAnimal";

export class CDog extends CGroundAnimal {
  country: string;
  readonly sound: string = "woof woof"; // without private modifier, this variable is publicly accessible.

  setCountryOfOrigin = (country: string)  => {
    this.country = country;
  }

  getCountryOfOrigin = () => {
    return this.country;
  }

  getSound(): string {
    return this.sound;
  }
}