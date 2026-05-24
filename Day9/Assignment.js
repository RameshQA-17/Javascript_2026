import {readFile} from "fs/promises"

console.log("starting reading text file");

let data =await readFile("Demo.txt");

console.log("Data from text file " + data);

console.log("completed file reading");

if(data.includes("headless"))
{
    console.log("headless support confirmesd");
    
}else
{
    console.log("headless support missing");
}

