import React, { useRef } from "react";
import useOutsiseClick from "../hooks/useOusideClick"

export default function () {
    let thisItem = useRef()
    let close = () => {
        console.log("close");
    }
    useOutsiseClick(thisItem, close)
    return <div ref={thisItem}>
        <hr />
        <h1>popup</h1>
        <hr />
    </div>
}