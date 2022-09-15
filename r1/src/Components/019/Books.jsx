import { useEffect, useState } from 'react';
import axios from 'axios';

function Books()  {

    const [books, setBooks] = useState(null);

    useEffect( () => {
        axios.get('https://in3.dev/knygos/')
        .then(res => setBooks(res.data));
    }, []);

    if (null === books) {
        return (
        <div className="loader-bin">
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
        );
    }

    return (
        <div className="books">
            {
                books?.map(b => <div className="book" key={b.id}>
                    <h2>{b.title}</h2>
                    <img src={b.img} alt={b.title}></img>
                    <h4>{b.author}</h4>
                    <div className="price">{b.price} eur</div>
                </div>)
            }
        </div>
    );
}

export default Books;