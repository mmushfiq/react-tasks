// import { INCREASE_COUNTER, DECREASE_COUNTER, RESET_COUNTER } from './actions';
import { UPDATE_COUNTER } from './actions';

// export const increaseCounter = counter => (
//     {
//         type: INCREASE_COUNTER,
//         payload: counter
//     }
// )

// export const decreaseCounter = counter => (
//     {
//         type: DECREASE_COUNTER,
//         payload: counter
//     }
// )

// export const resetCounter = counter => (
//     {
//         type: RESET_COUNTER,
//         payload: counter
//     }
// )

export const updateCounter = counter => (
    {
        type: UPDATE_COUNTER,
        payload: counter
    }
)
