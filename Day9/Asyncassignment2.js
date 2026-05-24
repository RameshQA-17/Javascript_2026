import{readFile} from "fs/promises"

console.log("file reading started");

let data=await readtextfile()
  
console.log("The text in the file is " + data);

console.log("file reading completed");

async function readtextfile()
{
    let data=await readFile("Demo1.txt")
    return data
}

if(data.includes("API") && data.includes("headless"))
{
    console.log("API and headless is found");
    
}else
{
    console.log("required keyword are not found");
    
}