import { useState } from "react";

function Select() {

    const [select, setSelect] = useState(3);

    return (
        <>
        <div className="form-container">
            
            <select value={select} onChange={e => setSelect(e.target.value)}>
                <option value="1">Drakoniukas</option>
                <option value="2">Delfinas</option>
                <option value="3">Katinas</option>
                <option value="18">Batuotas Katinas</option>
            </select>

        </div>
        </>
    );

}

export default Select;