export default {
    addMessage: (payload) => {
        return { type: 'ADD_MESSAGE', payload };
    },
    deleteLast: () => {
        return { type: 'DELETE_LAST'};
    }
}