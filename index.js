const { createStore, applyMiddleware } = require("redux");
const { fetchTodos } = require("./function");
const { delayActionMiddleware, fetchAsyncMiddleware } = require("./middlewares");

// initial state
const initialState = {
  todos: [],
};

// reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };
    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    default:
      return state;
  }
};

// store
const store = createStore(
  todoReducer,
  applyMiddleware(delayActionMiddleware, fetchAsyncMiddleware)
);

// subscribe to state change
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions
// store.dispatch({
//   type: "todos/todoAdded",
//   payload: "Learn redux with LWS",
// });
store.dispatch(fetchTodos);
