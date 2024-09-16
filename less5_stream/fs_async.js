import path from "node:path";
import fs from "node:fs";
const __dirname = import.meta.dirname;
const pathToFolder = path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");
fs.access(pathToFolder, (err) => {
  if (err) {
    if (err.code === "ENOENT") {
      fs.mkdir(pathToFolder, { recursive: true }, (err) => {
        if (err) {
          console.error("Error when creating a directory :", err);
        } else {
          console.log("The directory has been successfully created ");
          const buff = Buffer.from("NODEJS Programm");
          fs.writeFile(pathToFile, buff, (err) => {
            if (err) {
              console.log(err.code);
            } else {
              fs.readFile(pathToFile, (err, data) => {
                if (err) {
                  console.log(err.code);
                } else {
                  console.log(data.toString());
                }
              });
            }
          });
        }
      });
    } else {
      console.error("Error when checking directory :", err);
    }
  } else {
    console.log("The directory already exists ");
  }
});
