import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


const Inventory = () => {
    const { id } = useParams();
    const [perfumeQuantity, setPerfumeQuantity] = useState({});

    useEffect(() => {
        const url = `https://arcane-wave-63759.herokuapp.com/perfume/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPerfumeQuantity(data));
    }, [perfumeQuantity]);

    // delete item
    const handleDeliveredQuantity = id => {
        const oldQuantity = parseInt(perfumeQuantity.quantity);
        console.log(oldQuantity);
        const quantity = oldQuantity - 1;
        console.log(quantity);
        setPerfumeQuantity(quantity)

        const perfume = { quantity };


        const url = `https://arcane-wave-63759.herokuapp.com/perfume/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(perfume)
        })
            .then(res => res.json())
            .then(data => {
                console.log(perfume);
                alert('perfume delivered successfully!!')
            })

    }

    // add item
    const handleAddQuantity = event => {
        event.preventDefault();
        const oldQuantity = parseInt(perfumeQuantity.quantity);
        const quantity = oldQuantity + parseInt(event.target.quantity.value);

        const perfume = { quantity };
        setPerfumeQuantity(perfume)

        const url = `https://arcane-wave-63759.herokuapp.com/perfume/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(perfume)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('perfume added successfully!!')
                event.target.reset()
            })

    }




    return (
        <div>
            <div className='pb-10 mt-2'>
                <div className="card mb-3 w-50 mt-10 mx-auto">
                    <div className="card-header text-rose-500 font-semibold text-center text-3xl">{perfumeQuantity.name}</div>
                    <img style={{ height: "300px", width: "300px" }} src={perfumeQuantity.image} className="img-fluid rounded-start mx-auto pt-2" alt="..." />
                    <div className="card-body text-rose-500 text-center">
                        <h5 className="card-title"><strong className='text-black'>Price:</strong> {perfumeQuantity.price}</h5>
                        <p className="card-text"><strong className='text-black'>Quantity:</strong> {perfumeQuantity.quantity}</p>
                        <p className="card-text"><strong className='text-black'>Supplier:</strong> {perfumeQuantity.supplier}</p>
                        <p className="card-text"><strong className='text-black'>Description:</strong> {perfumeQuantity.description}</p>
                        <button onClick={() => handleDeliveredQuantity(id)} className='bg-rose-500 text-white p-2 rounded-md'>Delivered</button>
                    </div>
                </div>
            </div>

            <div className='w-50 bg-rose-500 mx-auto mt-12 mb-20 pb-6 '>
                <h3 className='text-4xl text-center pt-3 mb-4 text-white'>Restock  Items</h3>

                <Form onSubmit={handleAddQuantity}>
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                        <Form.Label className='text-white flex justify-center'></Form.Label>
                        <Form.Control type="text" name='quantity' placeholder="Add Quantity" />
                    </Form.Group>

                    <div className='text-center'>
                        <button type="submit" className='mt-3 bg-rose-200 text-rose-600 p-2 rounded-md'>Add Items</button>
                    </div>
                </Form>

            </div>
            <div className='flex justify-center mx-auto'>
                <button className=' bg-black p-2 rounded mb-10 '><Link className='text-rose-600 text-3xl text-decoration-none' to='/manageInventory'>Manage Inventories</Link></button>
            </div>
        </div>
    );
};

export default Inventory;