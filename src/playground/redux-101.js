import { createStore } from "redux";

// Action generators - Functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy 
});

const decrementCount = ({decrementBy = 1} = {}) => ({
        type: 'DECREMENT',
        decrementBy
});

const resetCount = () => ({
        type: 'RESET',
        count: 0
});

const setCount = ({count}) => ({
        type: 'SET',
        count
});



// Reducers specify how the application's state changes in response to actions sent to the store.
// Remember that actions only describe the fact that something happened, but don't describe how 
// the application's state changes.

// Key attributes of Reducers:
// 1. Reducers are pure functions
//     - Output is only determined by Input (Does not depend on anything outside the function scope and does not change anything outside)
// 2. Never change state or action - return an object thet represents the state 

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
            break;
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            }
            break;
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
            break;
    }
}

// Creating store
const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// Actions - to modify the data (change the redux store)
// Action is an object that is sent to the store
// increment, decrement, reset


// increment
// store.dispatch({
//     type: 'INCREMENT', // Only type is mandatory.We can add additional parameters to pass data
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));



store.dispatch(setCount({count: 101}));
unsubscribe();

store.dispatch({
    type: 'DECREMENT'
});
