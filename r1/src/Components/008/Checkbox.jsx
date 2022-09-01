import { useState } from "react";
import rand from '../../Functions/rand';

const checksData = {A: false, B: true, C: true, D: false};

function Checkbox() {

    const [cb, setCb] = useState(checksData);

    const change = e => {
        const v = e.target.value;
        setCb(c => ({...c, [v]: !c[v]})); //kai v == 'A' => A: !c.A
    }

    const randomCheck = () => {
        const checks = {};
        for (const a in checksData) {
            checks[a] = !rand(0, 1);
        }
        setCb(checks);

        // setCb({
        //     A: !rand(0, 1),
        //     B: !rand(0, 1),
        //     C: !rand(0, 1),
        //     D: !rand(0, 1)
        // });
    }

    return (
        <>
            <div className="form-container">
                <div>
                    <input type="checkbox" value="A" id="_1" onChange={change} checked={cb.A}></input>
                    <label htmlFor="_1" style={{color: cb.A ? 'crimson' : null}}>A Raidė</label>
                </div>
                <div>
                    <input type="checkbox" value="B" id="_2" onChange={change} checked={cb.B}></input>
                    <label htmlFor="_2" style={{color: cb.B ? 'crimson' : null}}>B Raidė</label>
                </div>
                <div>
                    <input type="checkbox" value="C" id="_3" onChange={change} checked={cb.C}></input>
                    <label htmlFor="_3" style={{color: cb.C ? 'crimson' : null}}>C Raidė</label>
                </div>
                <div>
                    <input type="checkbox" value="D" id="_4" onChange={change} checked={cb.D}></input>
                    <label htmlFor="_4" style={{color: cb.D ? 'crimson' : null}}>D Raidė</label>
                </div>
                <button onClick={randomCheck}>RANDOM</button>

            </div>
        </>
    );
}

export default Checkbox;
