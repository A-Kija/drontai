import { useState } from 'react';

function Text() {

    const [text, setText] = useState('');

    const control = e => {
        if (Number(e.target.value) == e.target.value) {
            setText(e.target.value);
        }
    }
    
    return (
        

        <div className="form-container">
            <h2>TEXT</h2>
            <input type="text" onChange={control} value={text}></input>
        </div>
    )
}

export default Text;