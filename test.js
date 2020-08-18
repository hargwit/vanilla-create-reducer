const test = require("tape");
const sinon = require("sinon");

const createReducer = require("./index");

test("creates a reducer", (t) => {
  // Define your actions
  const TEST_ACTIONS = {
    test: "__test__",
  };

  // Define your reduce function for each action
  const testReduce = sinon.fake.returns("new state");

  // Create a reducer, mapping the actions to reduce functions
  const reducer = createReducer({
    [TEST_ACTIONS.test]: testReduce,
  });

  const action = {
    type: TEST_ACTIONS.test,
  };

  // Call the reducer with an action to receive the new state
  const newState = reducer("state", action);

  t.equal(newState, "new state", "new state was returned");

  t.assert(
    testReduce.calledOnceWith("state", action),
    "reduce function called with state and action"
  );

  t.end();
});

test("throws on action types that are not recognized", (t) => {
  // Define your actions
  const TEST_ACTIONS = {
    test: "__test__",
  };

  // Define your reduce function for each action
  const testReduce = sinon.fake.returns("new state");

  // Create a reducer, mapping the actions to reduce functions
  const reducer = createReducer({
    [TEST_ACTIONS.test]: testReduce,
  });

  // Unknown action type
  const action = {
    type: "__unknown__",
  };

  t.throws(() => reducer("state", action), "error thrown on unknown type");

  t.assert(testReduce.notCalled, "reduce method not called");

  t.end();
});
