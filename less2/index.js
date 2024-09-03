//import "dotenv/config";
// const start = performance.now();
// console.log(process.pid);
// console.log(process.env.APP_TITLE);
// console.log(`Time: ${performance.now() - start} ms`);
// console.log("start");
// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// queueMicrotask(() => {
//   console.log("i am microtask");
// });
// Promise.resolve().then(() => {
//   console.log("i am promise");
// });
// console.log("end");
import EventEmmiter from "events";

const emitter = new EventEmmiter();
emitter.on("on_click", (color) => {
  console.log(`clicked event. Color: ${color}`);
});

emitter.emit("on_click2", "red");

/*
Створити класса Buyer (поля: name, email)
Створити подію "sale"
При виникненні події треба оповістити всіх покупців
*/
