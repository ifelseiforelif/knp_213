// import { log } from "node:console";
// import fs from "node:fs";
// const content = fs.readFileSync("./log.txt");
// log(content);
// const buff = Buffer.alloc(8);
// buff.write("hello world");
// console.log(buff.toString());

const buff = Buffer.from("Hello", "utf-8");
console.log(buff);
