import { readFile } from "fs/promises";

console.log("starting reading text file");

let data = await readFile("sample.txt");
console.log("Data from text file: " + data.toString());

console.log("completed file reading");
