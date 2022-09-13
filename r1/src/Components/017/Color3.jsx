import { useReducer } from "react"
import { actionColor3 } from "../../Actions/017";
import color3 from "../../Reducers/color3"

function Color3() {

    const [color, colorDispach] = useReducer(color3, {color: 1});

    return (
        <>
        <div className="container">
            <div className="kv" style={{
                backgroundColor: ['crimson', 'skyblue', 'darkgreen'][color.color - 1]
            }}></div>
        </div>
        <button onClick={() => colorDispach(actionColor3())}>Do color</button>
        </>
    )

}

export default Color3;