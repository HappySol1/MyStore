import React from "react";
import order from './store/order'
import { observer } from 'mobx-react-lite'
import { Link } from "react-router-dom";

function EnterInfo() {
    let inputs = Object.entries(order.formData).map(([name, field]) => {
        return <div className="inputGroup tableRow" key={name}>
            <label>{field.lable}</label>
            <input type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={field.value}
                name={name}
                onChange={(e) => order.change(name, e.target.value.trim())}>
            </input>
        </div>
    })
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Пожалуйста введите ваши контактные данные</h2>
            {inputs}
            {/* <hr /> */}
            <div className="BtnsRow">
                {order.isValid && <Link className="btn btn-info" disabled={!order.isValid} to="/FinalScreen">Купить</Link>}
            </div>
        </>
    )
}

export default observer(EnterInfo)