import { useState } from "react";
import rand from '../../Functions/rand';
import randColor from '../../Functions/randColor';

function Squares() {

    const [sq, setSq] = useState([]);

    const add = () => {
        setSq(s => [...s, { number: rand(100, 999), color: randColor() }]);
    }

    return (
        <>
            <div className="container">
                {
                    sq.map((n, i) => <div style={{ backgroundColor: n.color }} key={i}>{n.number}</div>)
                }
            </div>
            <button onClick={add}>add []</button>
        </>
    )

}

export default Squares;