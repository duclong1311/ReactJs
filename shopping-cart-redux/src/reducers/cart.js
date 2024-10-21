import {
    ADD_TO_CART,
    CHECKOUT_REQUEST,
    CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
    addedIds: [],
    quantityById: {}
}

//...

const addedIds = (state = initialState.addedIds, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.indexOf(action.productId) !== -1) {
                return state
            }
            return [...state, action.productId]
        default:
            return state
    }
}

const quantityById = (state = initialState.quantityById, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { productId } = action
            return {
                ...state,
                [productId]: (state[productId] || 0) + 1
            }
        default:
            return state
    }
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: quantityById(state.quantityById, action)
            }
        default:
            return state;
    }
}

export default cart

//...
export const getQuantity = (state, productId) =>
    state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds