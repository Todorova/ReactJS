export default (store = [], action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [...store, { index: store.length, content: action.payload.value }];
        case 'DELETE_LAST':
            return [...store.slice(0, store.length - 1)]
        case 'SAVE_CHANGES':
            return [...store.slice(0, action.payload.message.id),
            Object.assign({}, store[action.payload.message.id],
                { content: action.payload.message.value, showConfirmButtons: false }),
            ...store.slice(action.payload.message.id + 1)];
        case 'DISCARD_CHANGES':
            return [...store.slice(0, action.payload.message.id),
            Object.assign({}, store[action.payload.message.id],
                { content: action.payload.message.initValue, showConfirmButtons: false }),
            ...store.slice(action.payload.message.id + 1)];
        default:
            return store;
    }
}