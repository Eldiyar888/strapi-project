import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
    const [error, setError] = useState(null);
    const [product, setProduct] = useState([]);
    console.log(product)

    useEffect(() => {
        axios.get('http://localhost:1337/api/products')
            .then(resp => {
                setProduct(resp.data.data);
                console.log(resp.data.data)
            })
            .catch(error => {
                setError(error);
            })
    }, []);

    if (error) {
        return <div>An error occured: {error.message}</div>;
    }

    return (
        <div className='wrapper'> 
            <div className='item-wrapper'>
                {
                    product.map((item) => (
                        <div className='item' key={item.id}> <h2>{item.attributes.name.toUpperCase()}</h2> <p> <b><i>Описание:</i></b> {item.attributes.description}</p> <p> <b><i>Цена:</i></b> {item.attributes.price}</p> </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;