// get the input
const inputString = process.argv[2];

// Print
//console.log(inputString);

//new code to print the ascii art
import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text(inputString);
  console.log(text);
}

doStuff();