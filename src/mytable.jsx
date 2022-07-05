import React, { useRef } from "react";
import products from "./store/products";
import cart from "./store/cart";
import SingleProduct from "./SingleProduct"
import sort from "./store/sort";
import { observer } from 'mobx-react-lite'
import { Link } from "react-router-dom";


function Mytable() {
    let inpVal = useRef()
    let printItem = Object.entries(products.productFromServer).map(([field, curProd]) => {
        let linkurl = '/item/' + curProd.id
        return sort.isVaild(curProd) ? (
            <div className="singleItem" key={curProd.id}>
                <Link to={linkurl}><img src={curProd.imgUrl} alt="" /></Link>
                <Link to={linkurl} element={<SingleProduct id={curProd.id} />} >{curProd.brand + ' ' + curProd.title}</Link>
                <div className="pricebtnwrap">
                    <h5 className="singleItem-price">{curProd.price}$</h5>
                    {cart.inCart(curProd.id) ?
                        <button onClick={() => cart.remove(curProd.id)} className="btn btn-danger">Удалить</button>
                        :
                        <button onClick={() => cart.add(curProd.id)} className="btn btn-success">Добавить</button>}
                </div>

            </div>
        ) : null
    })
    return (<>
        <div className="col-3 col mynav">
            <h5>Максимальная цена</h5>
            <input type="text" ref={inpVal} onBlur={(e) => {
                e = Number(e.target.value)
                if (isNaN(e)) {
                    sort.sortArr.value = 0
                    inpVal.current.value = ''
                } else {
                    sort.sortArr.value = e
                }
            }} />
            <hr />
            <h5>Бренды</h5>
            {/* Временное решение */}
            <label>
                Adidas
                <input type="checkbox" data-brand="Adidas" onChange={(e) => sort.ChangeBrand(e)} />
            </label>
            <br />
            <label>
                New-Balance
                <input type="checkbox" data-brand="New-Balance" onChange={(e) => sort.ChangeBrand(e)} />
            </label>
            <br />
            <label>
                Chuck-Taylor
                <input type="checkbox" data-brand="Chuck-Taylor" onChange={(e) => sort.ChangeBrand(e)} />
            </label>
            <br />
            <label>
                Puma
                <input type="checkbox" data-brand="Puma" onChange={(e) => sort.ChangeBrand(e)} />
            </label>
            <br />
            <label>
                Pampa
                <input type="checkbox" data-brand="Pampa" onChange={(e) => sort.ChangeBrand(e)} />
            </label>
            <br />
            <label>
                Asics
                <input type="checkbox" data-brand="Asics" onChange={(e) => sort.ChangeBrand(e)} />
            </label>
            <br />
            <label>
                Reebok
                <input type="checkbox" data-brand="Reebok" onChange={(e) => sort.ChangeBrand(e)} />
            </label>

        </div>
        <div className="col-9 col mymainarea">
            < div className="ProductList" >
                {printItem}
            </div>
        </div>
    </>)
}

export default observer(Mytable)