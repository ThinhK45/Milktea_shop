import axios from 'axios';
import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_CREATE_REVIEW_REQUEST,
} from '../Constants/ProductConstants.js';

// PRODUCT LIST
export const listProduct = () => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_LIST_REQUEST,
        });
        const { data } = await axios.get('/api/products');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// PRODUCT DETAIL

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST,
        });
        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// PRODUCT REVIEW CREATE
export const createProductReview =
    (productId, review) => async (dispatch, getState) => {
        try {
            dispatch({
                type: PRODUCT_CREATE_REVIEW_REQUEST,
            });
            const {
                userLogin: { userInfo },
            } = getState();
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };
            await axios.post(
                `/api/products/${productId}/review`,
                review,
                config
            );
            dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
        } catch (error) {
            const message =
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
            if (message === 'Kh??ng c?? quy???n') {
                dispatch(logout());
            }
            dispatch({
                type: ORDER_PAY_FAIL,
                payload: message,
            });
        }
    };
