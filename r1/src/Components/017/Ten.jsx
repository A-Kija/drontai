import { useEffect } from "react";
import { useReducer } from "react";
import { get10, sort10 } from "../../Actions/017";
import ten from "../../Reducers/ten";

function Ten() {

    const [numbers, dispachNumbers] = useReducer(ten, []);

    useEffect(() => {
        dispachNumbers(get10());
    }, []);

    return (
        <>
            <div className="container">
                {
                    numbers.map((n, i) => <h4 key={i}>{n}</h4>)
                }
            </div>
            <div className="container">
                <button onClick={() => dispachNumbers(get10())}>reMake</button>
                <button onClick={() => dispachNumbers(sort10())}>soRt</button>
            </div>
        </>
    );

}

export default Ten;