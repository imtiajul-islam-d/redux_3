const fetch = require("node-fetch");
const fetchTodos = async (dispatch) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=2"
  );
  const todos = await response.json();
  dispatch({
    type: "todos/todoLoaded",
    payload: todos,
  });
};
module.exports = {
    fetchTodos
}