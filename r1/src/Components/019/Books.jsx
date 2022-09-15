import { useEffect, useState } from 'react';
import axios from 'axios';

function Books()  {

    const [books, setBooks] = useState(null);
    const [types, setTypes] = useState(null);

    useEffect( () => {
        axios.get('https://in3.dev/knygos/')
        .then(res => setBooks(res.data));
    }, []);

    useEffect( () => {
        axios.get('https://in3.dev/knygos/types/')
        .then(res => setTypes(res.data));
    }, []);

    const buy = id => {
        console.log(id);
    }

    if (null === books) {
        return (
        <div className="loader-bin">
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
        );
    }

    return (
        <div className="books">
            <div className="cart">
                <svg><use xlinkHref="#cart"></use></svg>
            </div>
            {
                books?.map(b => <div className="book" key={b.id}>
                    <div className="types">{types?.find(t => b.id === t.id).title}</div>
                    <h2>{b.title}</h2>
                    <img src={b.img} alt={b.title}></img>
                    <h4>{b.author}</h4>
                    <div className="price">
                        <span>{b.price.toFixed(2)} eur</span>
                        <button onClick={() => buy(b.id)}>Pirkti</button>
                        </div>
                </div>)
            }
        </div>
    );
}

export default Books;