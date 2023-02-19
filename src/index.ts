/*
1 - export/import : part of nodejs otherwise resulting error class not found.
2 - 
*/
import { CCat } from "./animal/CCat";
import { CDog } from "./animal/CDog";


function main() {
  const dogFrmAfrika = new CDog(); // Create a class instance/object.
  dogFrmAfrika.setCountryOfOrigin("Afrika");
  dogFrmAfrika.setName("Tony");
  dogFrmAfrika.setTotal(100);
  dogFrmAfrika.setColor("gray"); 
  dogFrmAfrika.setNumberOfLeg(4);

  const dogFrmJapan: CDog = new CDog; // Class can be used as both a type and value.
  dogFrmJapan.setCountryOfOrigin("Japan");
  dogFrmJapan.setName("Meme");
  dogFrmJapan.setTotal(88);
  dogFrmJapan.setNumberOfLeg(4);
  dogFrmJapan.setColor("white");
  dogFrmJapan.setDesc("This dog is a special breed.");

  let cat: CCat;
  cat = new CCat();

  console.log(`Country of origin: ${dogFrmAfrika.getCountryOfOrigin()}`);
  console.log(`Name: ${dogFrmAfrika.name}`);
  console.log(`Total: ${dogFrmAfrika.getTotal()}`);
  console.log(`Color: ${dogFrmAfrika.getColor()}`);
  console.log(`Number of legs: ${dogFrmAfrika.getNumberOfLeg()}`); 

  console.log(`\nCountry of origin: ${dogFrmJapan.getCountryOfOrigin()}`);
  console.log(`Name: ${dogFrmJapan.name}`);
  console.log(`Total: ${dogFrmJapan.getTotal()}`);
  console.log(`Color: ${dogFrmJapan.getColor()}`);
  console.log(`Sound: ${dogFrmJapan.getSound()}`);
  console.log(`Number of legs: ${dogFrmJapan.getNumberOfLeg()}`); 
  console.log(`Description: ${dogFrmJapan.getDesc()}`);
  dogFrmJapan.desc = "Replace previous description";
  console.log(`${dogFrmJapan.desc}`);

  console.log(`\n Cat sound: ${cat.getSound()}`);
}

main();