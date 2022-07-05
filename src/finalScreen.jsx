import React from "react";
import order from "./store/order";
import cart from "./store/cart";

export default function finalScreen() {
    let res = Object.entries(cart.productsDetailed).map(([field, item]) => {
        if (item.cnt > 0) {
            return <p key={item.id}>
                <span>{item.title} : </span>
                <span>{item.cnt} штук</span>
            </p>;
        }
    });

    return <div>
        <h2 style={{ textAlign: 'center' }}>Вы купили:</h2>
        {res}
        <br />
        <p><strong>За {cart.total}$</strong></p>
        <br />

        <p>
            <span>Контактные данные для отправки:</span>
            <br />
            <span>Имя: {order.formData.name.value}</span>
            <br />
            <span>Эмэил: {order.formData.email.value}</span>
            <br />
            <span>Телефон: {order.formData.phone.value} </span>
        </p>
        <br />
        <a className="btn btn-info" href="/">На главную</a>
    </div>;

}