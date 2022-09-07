import { useState } from "react";

function Create() {

    const [thing, setThing] = useState('');
    const [color, setColor] = useState('');
    const [cs, setCs] = useState(false);

    return (
        <div className="card">
            <div className="top">
                Create New Thing
            </div>
            <div className="body">
                <div className="form">
                    <label>Thing</label>
                    <input type="text" value={thing} onChange={e => setThing(e.target.value)}></input>
                </div>
                <div className="form">
                    <label>Color</label>
                    <input type="color" value={color} onChange={e => setColor(e.target.value)}></input>
                </div>
                <div className="form">
                    <input type="checkbox" id="sc" checked={cs} onChange={() => setCs(c => !c)}></input>
                    <label htmlFor="sc">Circle or Square</label>
                    <div className="c"></div>
                    <div className="s"></div>
                </div>
                <div className="form">
                    <button className="blue">Make Thing</button>
                </div>
            </div>
        </div>
    )
}

export default Create;