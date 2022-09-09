function T42({addFig}) {

    return (
        <div className="container">
        { addFig.map((_, i) => <div className="kv" key={i}></div>) }
        </div>
    )
}

export default T42;