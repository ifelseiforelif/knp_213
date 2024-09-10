import { log } from "node:console";
import path from "node:path";
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;
log(path.sep); //\
log(path.extname(__filename));
log(path.parse(__filename)); //{root, dir,base,ext,name}
log(path.join("users", "logs", "log.dat"));
log(path.resolve(__dirname, ".//users", "logs"));
log(path.isAbsolute(__filename));
log(path.dirname(__filename));
