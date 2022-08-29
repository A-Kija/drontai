import { useState } from "react";
import rand from '../../Functions/rand';

function Squares() {

    const [sq, setSq] = useState([]);

    const add = () => {
        setSq(s => [...s, rand(100, 999)]);
    }

    return (
        <>
            <div className="container">
                {
                    sq.map((n, i) => <div key={i}>{n}</div>)
                }
            </div>
            <button onClick={add}>add []</button>
        </>
    )

}

export default Squares;