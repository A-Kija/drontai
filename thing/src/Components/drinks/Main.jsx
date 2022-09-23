import { useEffect, useState } from "react";
import rand from "../../Functions/rand";
import Glass from "./Glass";

function Main() {

    const [drinks, setDrinks] = useState(null);

    useEffect(() => {
        setDrinks([...Array(19)].map(() => ({id: rand(1000000, 9999999)})));
    }, []);

    const empty = id => {
        setDrinks(d => d.map(g => g.id === id ? {...g, id: rand(1000000, 9999999)} : {...g}));
    }

    return (
        <div className="container bar">
            <div className="bin">
                <h1>Drinks Bar</h1>
                <div className="table">
                    {
                        drinks?.map(d => <Glass key={d.id} id={d.id} empty={empty} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Main;