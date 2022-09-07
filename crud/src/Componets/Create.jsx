function Create() {

    return (
        <div className="card">
            <div className="top">
                Create New Thing
            </div>
            <div className="body">
                <div className="form">
                    <label>Thing</label>
                    <input type="text"></input>
                </div>
                <div className="form">
                    <label>Color</label>
                    <input type="color"></input>
                </div>
                <div className="form">
                    <input type="checkbox" id="sc"></input>
                    <label htmlFor="sc">Circle or Square</label>
                    <div className="c"></div>
                    <div className="s"></div>
                </div>
            </div>
        </div>
    )
}

export default Create;