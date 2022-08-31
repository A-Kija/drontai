import { useState } from 'react';

function Text() {

    const [text, setText] = useState('');
    const [color, setColor] = useState('#7caa0c');

    const control = e => {
        // Number(e.target.value) && setText(e.target.value);
        setText(e.target.value);
    }

    const colorControl = e => {
        setColor(e.target.value);
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
        </>
    )
}

export default Text;