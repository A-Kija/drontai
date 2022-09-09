function T41({setAddFig}) {

    return (
        <button onClick={() => setAddFig(f => [...f, ''])}>Add</button>
    )
}

export default T41;