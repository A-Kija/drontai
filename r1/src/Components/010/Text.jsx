import { useState } from "react"

function Text() {

    const [text, setText] = useState('');
    const [textNow, setTextNow] = useState('');

    const control = e => {
        setText(e.target.value);
    }

    return ( 
        <>
        <div className="form-container">
            <h2>TEXT: {textNow}</h2>
            <input type="text" onChange={control} value={text}></input>
            <button onClick={() => setTextNow(text)}>Text Now</button>
        </div>
        </>
    )
}

export default Text;