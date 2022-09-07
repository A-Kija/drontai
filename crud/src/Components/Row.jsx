import { useContext } from "react";
import DataContext from "./DataContext";

function Row({ thing }) {

    const { setDeleteData } = useContext(DataContext);

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
                <button className="green">Edit</button>
                <button className="red" onClick={() => setDeleteData({id: thing.id})}>Delete</button>
            </div>
        </div>
    )
}

export default Row;