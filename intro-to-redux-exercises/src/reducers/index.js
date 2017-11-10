//main reducer consist of all reducers - in this case reducer is one so ...

export default (store = [], action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log('increment: ' + action.payload.index)
            return [...store.slice(0, action.payload.index),
            Object.assign({}, store[action.payload.index],
                { value: store[action.payload.index].value + action.payload.step }),
            ...store.slice(action.payload.index + 1)];
        case 'DECREMENT':
            console.log('decrement: ' + [...store.slice(0, action.payload.index)])
            return [...store.slice(0, action.payload.index),
            Object.assign({}, store[action.payload.index],
                { value: store[action.payload.index].value - action.payload.step }),
            ...store.slice(action.payload.index + 1)];
        case 'CLEAR':
            console.log('clear: ' + action.payload.index)
            return [...store.slice(0, action.payload.index),
            Object.assign(
                {}, store[action.payload.index],
                { value: 0 }),
            ...store.slice(action.payload.index + 1)
            ];
        case 'ADD_COUNTER':
            return [...store, { index: store.length, value: 0 }];
        case 'REMOVE_LAST':
            return [...store.slice(0, store.length - 1)]
        default:
            return store;
    }
}