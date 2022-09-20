import { useContext } from "react";
import { useState } from "react";
import DataContext from "./DataContext.jsx";

function Create() {

    const [thing, setThing] = useState('');
    const [color, setColor] = useState('#000000');
    const [cs, setCs] = useState(false);
    const [texture, setTexture] = useState(0);

    const { setCreateData, textures } = useContext(DataContext);

    const add = () => {
        setCreateData({
            thing,
            color,
            cs: cs ? 1 : 0,
            texture
        });
        setThing('');
        setColor('#000000')
        setCs(false);
        setTexture(0);
    }

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
                    <label>Texture</label>
                    <div className="cb-line">
                        {
                            textures.map(t => <span key={t.id}>
                                <input id={'c_' + t.id} type="checkbox" 
                                checked={t.id === texture} onChange={() => setTexture(t.id)}>
                                </input>
                                <label htmlFor={'c_' + t.id}>{t.title}</label>
                            </span>)
                        }
                    </div>
                </div>
                <div className="form">
                    <button className="blue" onClick={add}>Make Thing</button>
                </div>
            </div>
        </div>
    )
}

export default Create;