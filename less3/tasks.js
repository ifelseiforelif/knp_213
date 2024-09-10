setImmediate(() => {
  console.log("setImmediate"); //4
});
setTimeout(() => {
  console.log("setTimeout"); //5
}, 0);
Promise.resolve().then(() => {
  console.log("Promise"); //2
});
queueMicrotask(() => {
  console.log("Microtask"); //3
});

console.log("Sync"); //1
