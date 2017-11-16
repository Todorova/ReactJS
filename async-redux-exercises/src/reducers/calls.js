export default (store = {}, action) => {

    switch (action.type) {
        case 'AJAX_CALL':
            console.log('Fetching Data...');
            return store;
        case 'AJAX_END':
            console.log('Fetching Data finished!');
            return store;
        default:
            return store;
    }
}
