import { observe, Watcher } from "./index.js";

var state = observe({
  x: 0,
  y: 1,
  arr: [2]
});

new Watcher(state, "x", function (newVal, oldVal) {
  console.log("watch x:", newVal, oldVal);
});
new Watcher(state, "y", function (newVal, oldVal) {
  console.log("watch y:", newVal, oldVal);
});
new Watcher(state, "arr", function (newVal, oldVal) {
  console.log("watch arr:", newVal, oldVal);
});
new Watcher(state, undefined, function (newVal, oldVal) {
  console.log("watch state:", newVal, oldVal);
});

const obj = {a: 1}
state.x = obj;
state.y = 3;
state.x = obj;


state.arr.push(3);

console.log("state", state);
