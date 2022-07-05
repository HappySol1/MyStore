import React from "react"
import { NavLink, Link, Outlet } from "react-router-dom";
import cart from "./store/cart";
import { observer } from 'mobx-react-lite'

function navigation() {
    return (

        <div className='container'>
            <div className="row mynavbar">
                <div className="col col-7">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="navbar-brand nav-link" to='/MyStore/'>Магазин</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className={`navbar-brand nav-link ${cart.cart.length == 0 ? 'disabled' : ''}`} to='/MyStore/Cart'>Корзина</NavLink>
                                </li>
                                <li className="nav-item">
                                    {/* <NavLink className={cart.cart.length == 0 ? 'navbar-brand nav-link disabled' : 'navbar-brand nav-link'} to='/EnterInfo'>Оформление заказа</NavLink> */}
                                    <NavLink className={`navbar-brand nav-link ${cart.cart.length == 0 ? 'disabled' : ''}`} to='/MyStore/EnterInfo'>Оформление заказа</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="col-5 col cartpace-wrap">
                    <Link to={cart.cart.length == 0 ? '' : '/MyStore/Cart'}><div className="cartpace">
                        {/* {JSON.stringify(cart.cart)} */}
                        <span>Товаров в корзине: {cart.totalItems}</span>
                        <span>Цена: {cart.total}$</span>
                    </div>
                    </Link>
                </div>

            </div>
            <div className="row">
                <Outlet />
            </div>
            <footer></footer>
        </div >
    )
}

export default observer(navigation)