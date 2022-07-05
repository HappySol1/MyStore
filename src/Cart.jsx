import React from "react";
import order from './store/order'
import { observer } from 'mobx-react-lite'
import { Link } from "react-router-dom";
import cart from "./store/cart";
import Counter from "./mymodules/counter";

function Cart() {

    let productsRows = cart.productsDetailed.map(pr => (
        <tr key={pr.id}>
            <td>{pr.title}</td>
            <td>{pr.price}</td>
            <td>
                <Counter
                    // max={pr.rest}
                    currentItem={pr}
                    // onChange={val => cart.change(pr.id, val)}
                    onChange={cart.change}
                // key={pr.rest}
                />
            </td>
            <td>{pr.price * pr.cnt}</td>
            <td>
                <button type="button" onClick={() => cart.remove(pr.id)}>X</button>
            </td>
        </tr>
    ));

    return <>
        <h2 style={{ textAlign: 'center' }}>Корзина</h2>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Count</td>
                    <td>Total</td>
                    <td>Del</td>
                </tr>
            </thead>
            <tbody>
                {productsRows}
            </tbody>
        </table>
        <div className="total">
            <strong>{cart.total}$</strong>
        </div>
        <hr />
        <Link to='/MyStore/EnterInfo' className="btn btn-success">Next step</Link>
    </>
}
export default observer(Cart)