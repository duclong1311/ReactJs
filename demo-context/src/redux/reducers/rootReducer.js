const initState = {
    users: [
        { id: 1, name: 'Long' },
        { id: 2, name: 'Trang' }
    ],
}

export function rootReducer(state = initState, action) {
    return state;
}