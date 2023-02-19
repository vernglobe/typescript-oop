import { CGroundAnimal } from "./CGroundAnimal";

export class CDog extends CGroundAnimal {
  country: string;
  readonly sound: string = "woof woof";

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