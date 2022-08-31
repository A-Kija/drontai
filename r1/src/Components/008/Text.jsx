import { useState } from 'react';

function Text() {

    const [text, setText] = useState('');
    const [color, setColor] = useState('#7caa0c');
    const [range, setRange] = useState(0);

    const control = e => {
        // Number(e.target.value) && setText(e.target.value);
        setText(e.target.value);
    }

    const colorControl = e => {
        setColor(e.target.value);
    }

    const rangeControl = e => {
        setRange(e.target.value);
    }

    return (

        <>
            <div className="form-container">
                <h2>TEXT</h2>
                <input type="text" onChange={control} value={text}></input>
            </div>
            <div className="form-container">
                <h2 style={{color}}>COLOR</h2>
                <input type="color" onChange={colorControl} value={color}></input>
            </div>
            <div className="form-container">
                <h2>RANGE: {range.padStart(3, 0)}</h2>
                <input type="range" onChange={rangeControl} value={range}></input>
            </div>
        </>
    )
}

export default Text;