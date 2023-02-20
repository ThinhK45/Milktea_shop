import React from 'react';
import './App.css';
import './responsive.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/productScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import OrderScreen from './screens/OrderScreen';
import AddProduct from './screens/AddProduct';
import Login from './screens/Login';
import UserScreen from './screens/UserScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import NotFound from './screens/NotFound';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={HomeScreen} exact />
                <Route path="/search/:keyword" component={HomeScreen} exact />
                <Route path="/page/:pagenumber" component={HomeScreen} exact />
                <Route
                    path="/search/:keyword/page/:pageNumber"
                    component={HomeScreen}
                    exact
                />
                <Route path="/products/:id" component={SingleProduct} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRouter path="/profile" component={ProfileScreen} />
                <Route path="/cart/:id?" component={CartScreen} />
                <PrivateRouter path="/shipping" component={ShippingScreen} />
                <PrivateRouter path="/payment" component={PaymentScreen} />
                <PrivateRouter
                    path="/placeorder"
                    component={PlaceOrderScreen}
                />
                <PrivateRouter path="/order/:id" component={OrderScreen} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
};
export default App;
