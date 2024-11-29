import React, { useState, useEffect } from 'react';

function Contacts() {
    const [products, setProducts] = useState([]);


    async function generateUI() {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
    }


    async function deleteProduct(idItem) {

        fetch('https://fakestoreapi.com/products/' + idItem, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(() => {

                setProducts(products.filter(x => x.id !== idItem));
            })
            .catch(error => console.error("Error deleting product:", error));
    }


    useEffect(() => {
        generateUI();
    }, []);

    return (
        <div className='home'>
            <div className='home_text'>
                <div className='home_text_button'>
                    <button className='home_text_btn'>Add new Contact</button>
                </div>
            </div>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Title</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((x) => (
                            <tr key={x.id}>
                                <td>{x.id}</td>
                                <td><img src={x.image} alt={x.title} /></td>
                                <td>{x.category}</td>
                                <td>{x.description}</td>
                                <td>{x.price}</td>
                                <td>{x.title}</td>
                                <td>
                                    <button
                                        className='delete_btn'
                                        onClick={() => deleteProduct(x.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button className='update_btn'>Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Contacts;
