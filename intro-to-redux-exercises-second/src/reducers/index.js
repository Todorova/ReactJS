export default (store = [], action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [...store, { index: store.length, content: action.payload.value }];
        case 'DELETE_LAST':
            return [...store.slice(0, store.length - 1)]
        case 'SAVE_CHANGES':
            console.log('save')
            return store;
        case 'DISCARD_CHANGES':
            console.log('discard');
            return store;
        default:
            return store;
    }
}