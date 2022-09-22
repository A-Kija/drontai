function Nav() {

    return (
        <div className="container">
            <div className="bin">
                <nav>
                    <a href="/">Home</a>
                    <a href="/things" className="active">Things</a>
                    <a href="/owners">Owners</a>
                </nav>
            </div>
        </div>
    )
}

export default Nav;