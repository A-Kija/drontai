import { useEffect, useState } from 'react';
import axios from 'axios';
import { useReducer } from 'react';
import booksReducer from '../../Reducers/booksReducer';
import { getFromServer, sortBooks } from '../../Actions/books';

const selectOptions = [
    { id: 1, text: 'Default' },
    { id: 2, text: 'By Price 1-9' },
    { id: 3, text: 'By Price 9-1' },
    { id: 4, text: 'By Title A-Z' },
    { id: 5, text: 'By Title Z-A' }
]

function Books() {

    const [books, dispachBooks] = useReducer(booksReducer, null);
    const [types, setTypes] = useState(null);
    const [cart, setCart] = useState([]);
    const [select, setSelect] = useState(selectOptions[0].id);


    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(res => dispachBooks(getFromServer(res.data)));
    }, []);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/types/')
            .then(res => setTypes(res.data));
    }, []);

    useEffect(() => {
        dispachBooks(sortBooks(select));
    }, [select]);

    const buy = id => {
        const product = cart.find(b => b.id === id);
        if (product) {
            setCart(cart.map(p => p.id === id ? { ...p, count: p.count + 1 } : { ...p }));
        } else {
            setCart(c => [...c, { id, price: books.find(b => b.id === id).price, count: 1 }]);
        }
    }

    if (null === books) {
        return (
            <div className="loader-bin">
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        );
    }

    console.log(books);

    return (
        <>
            <div className="books">
                <div className="cart">
                    <span>{cart.length}</span>
                    <svg><use xlinkHref="#cart"></use></svg>
                    <strong>{(cart.reduce((pre, cur) => pre + cur.price * cur.count, 0).toFixed(2))}</strong>
                </div>
                <div className="left">
                    <div className='sort'>
                        <span>SORT:</span>
                        <select value={select} onChange={e => setSelect(e.target.value)}>
                            {
                                selectOptions.map(s => <option key={s.id} value={s.id}>{s.text}</option>)
                            }
                        </select>
                    </div>
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

        </>
    );
}

export default Books;