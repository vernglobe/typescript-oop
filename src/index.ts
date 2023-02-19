/*
1 - export/import : part of nodejs otherwise resulting error class not found.
2 - 
*/
import { CDog } from "./animal/CDog";


function main() {
  const dog = new CDog(); // Create a class instance/object.
  dog.setCountryOfOrigin("Afrika");
  dog.setName("Tony");
  dog.setTotal(100);
  dog.setColor("gray");

  console.log(`Country of origin: ${dog.getCountryOfOrigin()}`);
  console.log(`Name: ${dog.name}`);
  console.log(`Total: ${dog.getTotal()}`);
  console.log(`Color: ${dog.getColor()}`);
  

}

main();