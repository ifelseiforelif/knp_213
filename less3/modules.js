// import { User } from "./User.js";
// const user = new User();
// user.show();
// console.log("Dirname: ", __dirname);
// console.log("Filename: ", __filename);

const __dirname = import.meta.dirname;
const __filename = import.meta.filename;
console.log("Dirname: ", __dirname);
console.log("Filename: ", __filename);
