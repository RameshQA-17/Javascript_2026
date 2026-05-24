import{readFile} from "fs/promises"

console.log("starting reading from file");
   
let data=await readTextfile()

console.log("data from the text file "+data);

console.log("completed file reading");


async function readTextfile()
{
    let data=await readFile("sample.txt")
    return data
}

