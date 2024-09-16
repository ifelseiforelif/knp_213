// const simple = (val) => {
//   return new Promise((reject, resolve) => {
//     if (val > 0) {
//       resolve("val>0");
//     } else {
//       reject("val<=0");
//     }
//   });
// };

// simple(-40)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

import path from "node:path";
import fs from "node:fs/promises";
const __dirname = import.meta.dirname;
const pathToFolder = path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");
const buff = Buffer.from("NODEJS Programm");
//fs.writeFile("D:\\test\\data.txt", buff)
fs.writeFile(pathToFile, buff)
  .then(() => {
    console.log("Файл усішно записан");
  })
  .catch((err) => console.log(err));
