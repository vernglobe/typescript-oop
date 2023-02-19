import { CGroundAnimal } from "./CGroundAnimal";

export class CDog extends CGroundAnimal {
  country: string;

  setCountryOfOrigin = (country: string)  => {
    this.country = country;
  }

  getCountryOfOrigin = () => {
    return this.country;
  }
}