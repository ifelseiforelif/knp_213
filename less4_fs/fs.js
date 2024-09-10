import { log } from "node:console";
import fs from "node:fs";
import path from "node:path";
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

// const content = fs.readFileSync(path.resolve(__dirname, "files", "big.txt"), {
//   encoding: "utf-8",
// });
// fs.writeFileSync(path.resolve(__dirname, "files", "new_big.txt"), content);
// log(content);
fs.readFile(path.resolve(__dirname, "files", "big.txt"), (err, content) => {
  if (err) {
    log(err);
    process.exit();
  }
  fs.writeFile(
    path.resolve(__dirname, "files", "big_new.txt"),
    content,
    (err) => {
      if (err) log(err);
      else log(content.toString());
    }
  );
});

log("The end");
