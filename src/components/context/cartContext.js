import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";
import { TYPES } from "../actions/ShoppingActions";
import { data } from '../assets/db/data'
import { shoppingreducer } from "../reducers/ShoppingReducers";
import { useState } from "react";

export const cartContext = React.createContext({
    products: data,
    cart: [],
     
    addProductToCart: product => {},
    removeProductFromCart: productId => {}
});

function GlobalState(props){
    const [products, setProductos] = useState(data);

    const [cartState, dispatch] = useReducer(shoppingreducer, {cart: []});

    function addProductToCart (product) {
        dispatch({type: TYPES.ADD_TO_CART, product: product})
    };

    function removeProductFromCart (productId) {
        dispatch({type: TYPES.REMOVE_ONE_FROM_CART, productId: productId})
    };

    return(
        <cartContext.Provider
        value={{
            products: products,
            cart: cartState.cart,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart
        }}>
            {props.children}
        </cartContext.Provider>
    )
}

export default GlobalState;
