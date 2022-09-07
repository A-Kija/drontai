import { useContext } from "react";
import { useState } from "react";
import DataContext from "./DataContext.jsx";

function Edit() {

    const [thing, setThing] = useState('');
    const [color, setColor] = useState('#000000');
    const [cs, setCs] = useState(false);

    const { setCreateData } = useContext(DataContext);

    const add = () => {
        setCreateData({
            thing,
            color,
            cs: cs ? 1 : 0
        });
        setThing('');
        setColor('#000000')
        setCs(false);
    }

    return (
        <div className="modal">
            <div className="modal-bin">
                <div className="card">
                    <div className="top">
                        Edit This Thing
                        <span className="close">X</span>
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
                            <input type="checkbox" id="sce" checked={cs} onChange={() => setCs(c => !c)}></input>
                            <label htmlFor="sce">Circle or Square</label>
                            <div className="c"></div>
                            <div className="s"></div>
                        </div>
                        <div className="form row">
                            <button className="blue" onClick={add}>Edit Thing</button>
                            <button className="red" onClick={add}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;