import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {

    const [owners, setOwners] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/api2/all')
            .then(res => {
                setOwners(makeList(res.data));
            });
    }, []);

    const makeList = (data) => {
        const list = new Map();
        data.forEach(d => {
            if (list.has(d.name)) {
                list.set(d.name, [...list.get(d.name), d]);
            } else {
                list.set(d.name, [d]);
            }
        });
        return [...list];
    }

    return (
        <div className="container home">
            <div className="bin">
                <div>
                    <h1>Sweet Home Alabama</h1>
                    <ul>
                        {
                            owners?.map(ow => <li key={ow[0]}>
                                {ow[0]}
                                <ul>
                                {
                                    ow[1].map(t => <li key={t.id}>
                                        {t.title}
                                    </li>)
                                }
                                </ul>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;