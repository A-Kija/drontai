import { useState } from "react";

function Sq() {

    const [cb, setCb] = useState(false);

    const [paint, setPaint] = useState(false);


    return (
        <>
            <div className="form-container">
                <div className="kv" style={{backgroundColor: paint ? 'black' : 'crimson'}}></div>
                <div>
                    <input type="checkbox" id="_1" onChange={() => setCb(c => !c)} checked={cb}></input>
                    <label htmlFor="_1" style={{ color: cb ? 'crimson' : null }}>Checked</label>
                </div>
                <button onClick={() => setPaint(cb)}>Paint</button>
            </div>
        </>
    )

}

export default Sq;