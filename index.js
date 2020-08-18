module.exports = createReducer;

function createReducer(actionMapping) {
  if (!(actionMapping instanceof Object) || actionMapping instanceof Array) {
    throw new Error("Action mapping object must be an object");
  }

  return function (state, action) {
    if (actionMapping[action.type] === undefined) {
      throw new Error(`Unknown action type ${action.type}`);
    }

    return actionMapping[action.type](state, action);
  };
}
