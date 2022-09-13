import { useReducer } from "react"
import { actionColor3, actionColor3Size } from "../../Actions/017";
import color3 from "../../Reducers/color3"

function Color3() {

    const [color, colorDispach] = useReducer(color3, {
        color: 1,
        size: 20
    });

    return (
        <>
        <div className="container">
            <div className="kv" style={{
                backgroundColor: ['crimson', 'skyblue', 'darkgreen'][color.color - 1],
                width: color.size + 'px',
                height: color.size + 'px'
            }}></div>
        </div>
        <button onClick={() => colorDispach(actionColor3())}>Do color</button>
        <button onClick={() => colorDispach(actionColor3Size())}>Do Size</button>
        </>
    )

}

export default Color3;