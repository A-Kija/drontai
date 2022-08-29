import { useState } from "react";

function Squares() {

    const [sq, setSq] = useState([]);

    const add = () => {
        setSq(s => [...s, '']);
    }

    return (
        <>
        <div className="container">
            {
                sq.map((_, i) => <div key={i}>{ i + 1 }</div>)
            }
        </div>
            <button onClick={add}>add []</button>
        </>
    )

}

export default Squares;