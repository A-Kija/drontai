import { useContext } from "react";
import DataContext from "./DataContext";

function BinRow({ thing }) {

    const { setRestoreData, setDestroyData } = useContext(DataContext);

    return (
        <div className="row">
            <div className="content">
                <h2>{thing.thing}</h2>
                <div className="color" style={{
                    backgroundColor: thing.color,
                    borderRadius: thing.cs ? '50%' : null
                }}></div>
            </div>
            <div className="buttons">
                <button className="red" onClick={() => setDestroyData({id: thing.id})}>Remove</button>
                <button className="blue" onClick={() => setRestoreData({id: thing.id})}>Restore</button>
            </div>
        </div>
    )
}

export default BinRow;