import { useRef, useEffect, useState } from "react";
import rand from '../../Functions/rand';

function Glass({id, empty}) {

    const [fill, setFill] = useState(null);
    const speed = useRef(null);

    useEffect(() => {
        setFill(330);
        speed.current = rand(200, 2000);
    }, []);

    useEffect(() => {
        if (null === fill) {
            return;
        }
        if (fill) {
            setTimeout(() => {
                drink();
            }, speed.current);
        } else {
            empty(id);
        }
    }, [fill]);

    const drink = () => {
        setFill(f => f ? f - 30 : 0);
    }


    return (
        <div className="glass">
            <div className="fill" style={{height: fill + 'px'}}>
            </div>
        </div>
    )
}

export default Glass;