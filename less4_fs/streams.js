import fs from "node:fs";
import path from "node:path";
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

const readStream = fs.createReadStream(
  path.resolve(__dirname, "files", "big.txt")
);

const writeStream = fs.createWriteStream(
  path.resolve(__dirname, "files", "big2.txt")
);
readStream.pipe(writeStream);
// readStream.on("data", (chunk) => {
//   console.log("Start chunk ...");
//   console.log(chunk);
//   console.log(chunk.length);
//   console.log("End chunk ...");
// });
// readStream.on("end", () => {
//   console.log("The end");
// });
// readStream.on("open", () => {
//   console.log("File is opened");
// });
// readStream.on("close", () => {
//   console.log("File is closed");
// });
