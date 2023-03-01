// middleware
const delayActionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "todos/todoAdded":
      console.log("I am delaying you!");
      setTimeout(() => {
        next(action);
      }, 2000);
      // this return is to keep stop execution of other functions
      return;
    default:
      next(action);
  }
};

module.exports = {
    delayActionMiddleware
}