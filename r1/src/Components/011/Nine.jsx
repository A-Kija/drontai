function Nine({nine}) {

    return (
        <div className="container9">
            {
                nine.map((c, i) => <div key={i} style={{backgroundColor: c}}></div>)
            }
        </div>
    );
}

export default Nine;