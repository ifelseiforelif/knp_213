import path from "node:path";
import fs from "node:fs";
import zlib from "node:zlib";
const __dirname = import.meta.dirname;
const pathToFolder = path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");
const readStream = fs.createReadStream(pathToFile);
const writeStream = fs.createWriteStream(
  path.join(pathToFolder, "new_data.zip")
);
const transformStream = zlib.createGzip();
readStream.pipe(transformStream).pipe(writeStream);
// readStream
//   .on("error", () => {})
//   .on("open", () => {
//     console.log("Opened");
//   })
//   .pipe(writeStream)
//   .on("error", () => {});

// readStream.on("readable", () => {
//   const chunk = readStream.read();
//   console.log(`\n` + "chunk start..." + `\n`);
//   console.log(chunk);
//   //console.log(`Size: ${chunk.length}`);
// });

// readStream.on("data", (chunk) => {
//   console.log(`\n` + "chunk start..." + `\n`);
//   console.log(chunk);
//   writeStream.write(chunk, (err) => {
//     if (err) console.log(err);
//   });
//   console.log(`Size: ${chunk.length}`);
//   readStream.pause();
//   setTimeout(() => {
//     readStream.resume();
//   }, 5000);
//   console.log("chunk end");
// });
// readStream.on("open", () => {
//   console.log("File was opened");
// });
// readStream.on("close", () => {
//   console.log("File was closed");
// });
// readStream.on("end", () => {
//   console.log("----End----");
// });
