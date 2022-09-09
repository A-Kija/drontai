function T42({addFig}) {

    return (
        <div className="container">
        { addFig.map((c, i) => <div className={c} key={i}></div>) }
        </div>
    )
}

export default T42;