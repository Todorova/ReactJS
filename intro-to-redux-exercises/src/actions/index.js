export default {
    addCounter: () => {
        return { type: 'ADD_COUNTER' };
    },
    removeCounter: () => {
        return { type: 'REMOVE_LAST' };
    },
    incrementCounter: (payload) => {
        console.log(payload)
        return { type: 'INCREMENT', payload };
    },
    decrementCounter: (payload) => {
        return { type: 'DECREMENT', payload };
    },
    clearCounter: (payload) => {
        return { type: 'CLEAR', payload };
    }
}