function Row({ thing }) {

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
                <button className="red">Delete</button>
            </div>
        </div>
    )
}

export default Row;