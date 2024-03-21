import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <>
            <div style={{marginBooton: 30, display:'flex', gap:10}}>
                <button>
                    <link to={'/'}>Home</link>
                </button>
                <button>
                    <link to={'/products'}>Products</link>
                </button>
                <button>
                    <link to={'/Contact'}>Contact</link>
                </button>
            </div>
        </>
    );
}