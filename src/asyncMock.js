const products = [
{
    id: 1,
    title: 'Conjuntos',
    price: '30',
    category: 'ropa',
    description: 'talles: XS, S, M, L',
    color: 'negro, gris, azul, rojo, verde, morado, estampados',
    image: 'https://www.pexels.com/es-es/foto/mujer-deporte-joven-actividad-6311553/',
},
{
    id: 2,
    title: 'Tops deportivos',
    price: '12',
    category: 'ropa',
    description: 'talles: XS, S, M, L',
    color: 'negro, gris, rojo, rosado, azul, verde, morado',
    image: 'https://images.app.goo.gl/uq4GupByJASSoDiT9',
},
{
    id: 3,
    title: 'Leggins',
    price: '20',
    category: 'ropa',
    description: 'talles: XS, S, M, L',
    color: 'negro, gris, rojo, azul, morado',
    image: 'https://www.pexels.com/es-es/foto/sano-mujer-sin-rostro-deporte-5262957/',
},
{
    id: 4,
    title: 'Short push',
    price: '15',
    category: 'ropa',
    description: 'talles: XS, S, M, L',
    color: 'negro, gris, azul, verde, morado',
    image: 'https://www.pexels.com/es-es/foto/mujer-en-sujetador-deportivo-blanco-y-pantalon-negro-con-pelota-de-ejercicio-azul-6453589/',
},
{
    id: 5,
    title: 'Sudaderas',
    price: '25',
    category: 'ropa',
    description: 'talles: XS, S, M, L',
    color: 'negro, gris, azul, rojo, rosado, verde, morado',
    image: 'https://www.pexels.com/es-es/foto/mujer-en-sudadera-con-capucha-gris-de-pie-junto-a-la-pared-de-madera-marron-6311317/',
},
{
    id: 20,
    title: 'zapatos Nike',
    price: '100',
    category: 'zapatos',
    description: 'talles: 6, 7, 7.5, 8, 9',
    color: 'negro, blanco',
    image: 'https://www.pexels.com/es-es/foto/foto-de-zapatillas-sobre-fondo-blanco-2529148/',
},
];

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
        console.log('Enviando datos!')
    }, 2000);
});

export const getProduct = (id) => {
    return products.find(prod => prod.id == id);
}
