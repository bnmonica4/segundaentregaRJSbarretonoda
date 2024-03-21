import {useNavigate} from 'react-router-dom';
export default function ProductsComponents() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/product/1');
    };

    const handleClick2 = () => {
        navigate('/product/2');
    };

    return (
        <>
            <div>
                <h1>Products Components</h1>
                <button onClick={handleClick}>Ver más</button>
            </div>
        </>
    );
}

