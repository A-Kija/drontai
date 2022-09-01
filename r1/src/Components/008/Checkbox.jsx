function Checkbox() {

    return (
        <>
            <div className="form-container">
                <div>
                    <input type="checkbox" value="A" id="_1"></input>
                    <label htmlFor="_1">A Raidė</label>
                </div>
                <div>
                    <input type="checkbox" value="B" id="_2"></input>
                    <label htmlFor="_2">B Raidė</label>
                </div>
                <div>
                    <input type="checkbox" value="C" id="_3"></input>
                    <label htmlFor="_3">C Raidė</label>
                </div>
                <div>
                    <input type="checkbox" value="D" id="_4"></input>
                    <label htmlFor="_4">D Raidė</label>
                </div>

            </div>
        </>
    );
}

export default Checkbox;
