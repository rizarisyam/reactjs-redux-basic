import { createStore } from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {value: 0, toggleCounter: false}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value += 1
        },
        decrement(state) {
           
            state.value -= 1
        },
        increase(state, action) {
            state.value = state.value + action.payload;
        },
        toggle(state) {
            state.toggleCounter = !state.toggleCounter
        }
    }
})

// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'INCREMENT') {
//         return {
//             counter: state.counter + action.amount,
//             toggleCounter: state.toggleCounter
//         }
//     }

//     if(action.type === 'DECREMENT') {
//         return {
//             counter: state.counter - 1,
//             toggleCounter: state.toggleCounter
//         }
//     }

//     if(action.type === 'TOGGLE') {
//         return {
//             counter: state.counter,
//             toggleCounter: !state.toggleCounter
//         }
//     }

//     return state
// }

const store = configureStore({
    // reducer: {
    //     key: reducer
    // }
    reducer: {counter: counterSlice.reducer}
});

export const counterActions = counterSlice.actions;

export default store;