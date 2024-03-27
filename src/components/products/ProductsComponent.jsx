import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';

export default function ProductsComponent() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts.then((data) => setProducts(data));
    });

    const handleClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <>
            <div>
                <h1>Ropa deportiva para damas</h1>
                <section style={{ display: 'flex', gap: 10 }}>
                </section>
                <button onClick={handleClick}>Ver más</button>
            </div>
        </>
    );
}

