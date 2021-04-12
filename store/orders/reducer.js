import { actionTypes } from './action';

export const initialState = {
    allOrders: null,
    singleOrder: null,
    error: false,
    totalOrders: 0,
    ordersLoading: true,
    orderLoading: true,
    searchResults: null,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ORDERS_SUCCESS:
            return {
                ...state,
                ...{ allOrders: action.data, ordersLoading: false },
            };
        case actionTypes.GET_TOTAL_OF_ORDERS_SUCCESS:
            return {
                ...state,
                ...{ totalOrders: action.payload },
            };


        case actionTypes.GET_ORDERS_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        default:
            return state;
    }
}

export default reducer;
