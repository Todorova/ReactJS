export default {
    saveChangedMessage: (payload) => {
        return {type: 'SAVE_CHANGES', payload}
    },
    discardChanges: (payload) => {
        return {type: 'DISCARD_CHANGES', payload}
    }
}