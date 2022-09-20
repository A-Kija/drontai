import { useContext } from "react";
import DataContext from "./DataContext";
import BinRow from "./BinRow";

function Bin() {

    const { deletedThings } = useContext(DataContext);

    return (
        <div className="card mt">
            <div className="top">
                Things in Recycle Bin
            </div>
            <div className="body">
                {
                    deletedThings?.map(t => <BinRow key={t.id} thing={t} />)
                }
            </div>
        </div>
    )
}

export default Bin;
