import {
    ORDER_LIST_FAIL,
    ORDER_LIST_REQUEST,
    ORDER_LIST_SUCCESS,
} from '../Constants/OrderConstants';

// ALL PRODUCTS
export const orderListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return { loading: true };
        case ORDER_LIST_SUCCESS:
            return { loading: false, orders: action.payload };
        case ORDER_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
