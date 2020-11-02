import Model from "./index";

const model = new Model({
  state: {
    nodes: [],
    a: 1,
  },
});

model.install("action", {
  type: "ADD",
  reducer: (state, action) => {
    state.nodes.push(action.payload);
    // state.nodes = state.nodes;
    return state;
  },
});


model.dispatch({
  type: 'ADD',
  payload: 1
})

model.dispatch({
  type: 'ADD',
  payload: 2
})

model.subscribe((newVal, oldVal, state) => {
  console.log("subscribe:", newVal, oldVal, state);
}, []);



console.log("state", model.getState());
