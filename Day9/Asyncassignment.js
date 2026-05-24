import{readFile} from "fs/promises"

console.log("File reading started");

let data=await readtextFile()

console.log("The text from file is " + data);

console.log("File reading completed");

async function readtextFile()
{
     let data=await readFile("Demo.txt")
     return data
}

if(data.includes("headless"))
{
    console.log("headless support confirmed");
    
}else
{
    console.log("headless support missing");
}