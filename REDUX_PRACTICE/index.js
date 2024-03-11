const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions;
const fetchUsers = require('./features/user/userSLice').fetchUsers;

console.log("initial state: ",store.getState());
const unsubscribe = store.subscribe(
    () => {console.log("state changed: ",store.getState())}
);

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(icecreamActions.ordered(2));
// store.dispatch(icecreamActions.ordered(2));
// store.dispatch(icecreamActions.ordered(2));
// store.dispatch(icecreamActions.restocked(3));

// unsubscribe();