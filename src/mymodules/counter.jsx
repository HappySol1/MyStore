import React, { useRef, useEffect } from "react";
import cart from "../store/cart";

export default function Counter({ onChange, currentItem }) {
    // let onChange = cart.change
    // console.log(currentItem);

    let myInp = useRef()
    let minus = () => {
        onChange(currentItem.id, currentItem.cnt - 1)
        myInp.current.value = currentItem.cnt - 1
    }
    let plus = () => {
        onChange(currentItem.id, currentItem.cnt + 1)
        myInp.current.value = currentItem.cnt + 1
    }
    function blurCurrent(e) {
        let numb = parseInt(e.target.value)
        if (numb) {
            numb = Math.max(Math.min(numb, currentItem.rest), 0)
            onChange(currentItem.id, numb)
            myInp.current.value = numb
        } else {
            onChange(currentItem.id, 0)
            myInp.current.value = 0
        }
    }
    useEffect(() => { myInp.current.value = currentItem.cnt }, [currentItem])
    return (
        <div className="counter">
            {/* <span>{currentItem.cnt}</span> */}
            <input type="text" ref={myInp} defaultValue={0} onBlur={(e) => blurCurrent(e)} className="form-control"></input>
            <button onClick={minus} disabled={currentItem.cnt === 0} className="btn btn-warning">Subtract</button>
            <button onClick={plus} disabled={currentItem.cnt === currentItem.rest} className="btn btn-success" style={{ float: "right" }}>Add</button>
        </div>
    )
}