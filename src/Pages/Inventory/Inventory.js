import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import usePerfumeDetail from '../../hooks/usePerfumeDetail';


const Inventory = () => {
    const { id } = useParams();
    const [perfumeDetail] = usePerfumeDetail(id);
    const [perfumeQuantity, setPerfumeQuantity] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/perfume/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPerfumeQuantity(data));
    }, []);

    // delete item
    const handleDeliveredQuantity = id => {
        window.location.reload(false);
        const oldQuantity = parseInt(perfumeQuantity.quantity);
        const quantity = oldQuantity - 1;

        const perfume = { quantity };


        const url = `http://localhost:5000/perfume/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(perfume)
        })
            .then(res => res.json())
            .then(data => {
                alert('perfume delivered successfully!!')
            })

    }

    // add item
    const handleAddQuantity = event => {
        event.preventDefault();
        window.location.reload(false);
        const oldQuantity = parseInt(perfumeQuantity.quantity);
        const quantity = oldQuantity + parseInt(event.target.quantity.value);

        const perfume = { quantity };

        const url = `http://localhost:5000/perfume/${id}`;
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
                    <div className="card-header text-rose-500 font-semibold text-center text-3xl">{perfumeDetail.name}</div>
                    <img style={{ height: "300px", width: "300px" }} src={perfumeDetail.image} className="img-fluid rounded-start mx-auto pt-2" alt="..." />
                    <div className="card-body text-rose-500 text-center">
                        <h5 className="card-title"><strong className='text-black'>Price:</strong> {perfumeDetail.price}</h5>
                        <p className="card-text"><strong className='text-black'>Quantity:</strong> {perfumeDetail.quantity}</p>
                        <p className="card-text"><strong className='text-black'>Supplier:</strong> {perfumeDetail.supplier}</p>
                        <p className="card-text"><strong className='text-black'>Description:</strong> {perfumeDetail.description}</p>
                        <button onClick={() => handleDeliveredQuantity(id)} className='bg-rose-500 text-white p-2 rounded-md'>Delivered</button>
                    </div>
                </div>
            </div>

            <div className='w-50 bg-rose-500 mx-auto mt-12 mb-20 pb-6 '>
                <h3 className='text-4xl text-center pt-3 mb-4 text-white'>Restock  Items</h3>
                <form onSubmit={handleAddQuantity} className=' w-50 mx-auto'>
                    <div className="form-group">
                        <input type="text" name='quantity' className="form-control" id="exampleInputPassword1" placeholder="Add Quantity" />
                    </div>
                    <div className='text-center'>
                        <button type="submit" className='mt-3 bg-rose-200 text-rose-600 p-2 rounded-md'>Add Items</button>
                    </div>
                </form>
            </div>
            <div className='flex justify-center mx-auto'>
                <button className=' bg-black p-2 rounded mb-10 '><Link className='text-rose-600 text-3xl text-decoration-none' to='/manageInventory'>Manage Inventories</Link></button>
            </div>
        </div>
    );
};

export default Inventory;