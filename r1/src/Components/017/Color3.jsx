import { useState } from "react";
import { useReducer } from "react"
import { actionColor3, actionColor3Border, actionColor3Size } from "../../Actions/017";
import color3 from "../../Reducers/color3"

function Color3() {

    const [color, colorDispach] = useReducer(color3, {
        color: 1,
        size: 20,
        border: 0
    });
    const [border, setBorder] = useState(0);

    return (
        <>
        <div className="container">
            <div className="kv" style={{
                backgroundColor: ['crimson', 'skyblue', 'darkgreen'][color.color - 1],
                width: color.size + 'px',
                height: color.size + 'px',
                border: color.border + 'px solid pink'
            }}></div>
        </div>
        <button onClick={() => colorDispach(actionColor3())}>Do color</button>
        <button onClick={() => colorDispach(actionColor3Size())}>Do Size</button>
        border size: <input type="number" value={border} onChange={e => setBorder(e.target.value)}></input>
        <button onClick={() => {colorDispach(actionColor3Border(border))}}>Set Border</button>
        </>
    )

}

export default Color3;