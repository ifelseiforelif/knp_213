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
import EventEmitter from "node:events";

const listener1 = () => {
  console.log("I am l1");
};
const listener2 = () => {
  console.log("I am l2");
};
const listener3 = () => {
  console.log("I am l3");
};

const emitter = new EventEmitter();
emitter.setMaxListeners(100);
emitter.on("on_click", listener1);
emitter.addListener("on_click", listener2);
emitter.on("on_click", listener3);
//emitter.removeAllListeners("on_click");
emitter.emit("on_click");
emitter.on("double_click", listener3);
console.log(
  "Count listeners for double_click: " + emitter.listenerCount("on_click")
);
console.log(emitter.eventNames());
// emitter.emit("on_click");
// emitter.off("on_click", listener2);
// emitter.emit("on_click");
// emitter.removeListener("on_click", listener1);
// emitter.emit("on_click");

console.log(emitter.getMaxListeners());

/*
Створити класса Buyer (поля: name, email)
Створити подію "sale"
При виникненні події треба оповістити всіх покупців
*/
