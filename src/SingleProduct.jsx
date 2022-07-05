import React from "react";
// import order from "./store/order";
import products from "./store/products";
import cart from "./store/cart";
import { useParams, Navigate } from "react-router-dom"
import { observer } from 'mobx-react-lite'

function SingleProduct() {
    let { id } = useParams();
    let currentProduct = products.getById(Number(id));
    return !currentProduct ? <Navigate to="/" replace /> : <div>

        {currentProduct.brand + " " + currentProduct.title}
        <br />
        <img src={currentProduct.imgUrl} alt="" />
        <br />
        {currentProduct.price}$
        <br />
        {console.log(cart.inCart(currentProduct.id))}
        {cart.inCart(currentProduct.id) ?
            <button onClick={() => cart.remove(currentProduct.id)} className="btn btn-danger">Удалить</button>
            :
            <button onClick={() => cart.add(currentProduct.id)} className="btn btn-success">Добавить</button>}
    </div>;
}

export default observer(SingleProduct)