import { ORDER_LIST_REQUEST } from '../Constants/OrderConstants';
import axios from 'axios';

// ALL PRODUCT
export const listOrders = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_LIST_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(`/api/orders/all`, config);

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === 'Không có quyền') {
            dispatch(logout());
        }
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: message,
        });
    }
};
