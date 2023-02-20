import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userListReducer, userLoginReducer } from './Reducers/userReducers.js';
import {
    productCreateReducer,
    productDeleteReducer,
    productEditReducer,
    productListReducer,
    productUpdateReducer,
} from './Reducers/ProductReducers.js';
import {
    orderDeliveredReducer,
    orderDetailsReducer,
    orderListReducer,
} from './Reducers/OrderReducers.js';
const reducer = combineReducers({
    userLogin: userLoginReducer,
    userList: userListReducer,
    productList: productListReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productEdit: productEditReducer,
    productUpdate: productUpdateReducer,
    orderList: orderListReducer,
    orderDetails: orderDetailsReducer,
    orderDelivered: orderDeliveredReducer,
});

// login
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
