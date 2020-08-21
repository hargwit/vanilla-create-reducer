# create-vanilla-reducer ![Travis CI badge](https://travis-ci.com/hargwit/vanilla-create-reducer.svg?branch=master) [![codecov](https://codecov.io/gh/hargwit/vanilla-create-reducer/branch/master/graph/badge.svg)](https://codecov.io/gh/hargwit/vanilla-create-reducer) [![npm version](https://badge.fury.io/js/vanilla-create-reducer.svg)](https://badge.fury.io/js/vanilla-create-reducer)

Create a reducer from an object of reducer functions keyed by the action type. To be used with any JS framework.

An alternative pattern to the classic Redux style switch case.

```js
import createReducer from "vanilla-create-reducer";

const ACTIONS = {
  toggle: "__toggle__",
  set: "__set__",
};

function toggle(state, action) {
  return { ...state, on: !state.on };
}

function set(state, action) {
  return { ...state, on: action.on };
}

const reducer = createReducer({
  [ACTIONS.toggle]: toggle,
  [ACTIONS.set]: set,
});
```

To see `createReducer` in action, check out [this React sandbox](https://codesandbox.io/s/vanilla-create-reducer-example-wdrh5)
