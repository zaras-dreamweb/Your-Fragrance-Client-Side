import React from 'react';
import { Link } from 'react-router-dom';
import usePerfumes from '../../hooks/UsePerfumes';
import './ManageInventory.css'

const ManageInventory = () => {
    const [perfumes, setPerfumes] = usePerfumes();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/perfume/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingPerfumes = perfumes.filter(perfume => perfume._id !== id);
                    setPerfumes(remainingPerfumes);
                })
        }
    }


    return (
        <div className='text-center'>
            <h2 className='text-center text-4xl mt-20 mb-10'><span className='text-rose-500'>MANAGE</span><span className='text-black'> INVENTORY</span></h2>
            <div className='pt-10 pb-10 mb-20'>
                {
                    perfumes.map(perfume => <p key={perfume._id}>
                        <table className="container col-md-12 table-bordered table-striped table-condensed cf">
                            <thead className="cf">
                                <tr>
                                    <th><button onClick={() => handleDelete(perfume._id)} className='p-1 px-2 bg-rose-600 text-white'>Delete</button></th>
                                    <th>YOUR FRAGRANCE PERFUME BRANDS</th>
                                    <th className="numeric"> Quantity</th>
                                    <th className="numeric">Price</th>
                                    <th className="numeric">Supplier</th>
                                    <th className="numeric">ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-title="Code"></td>
                                    <td data-title="Company">{perfume.name}</td>
                                    <td data-title="Price" className="numeric">{perfume.quantity}</td>
                                    <td data-title="Change" className="numeric">${perfume.price}</td>
                                    <td data-title="Change" className="numeric">{perfume.supplier}</td>
                                    <td data-title="Open" className="numeric">{perfume._id}</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>)
                }
            </div>

            <div className='flex justify-center mx-auto'>
                <button className=' bg-black p-2 rounded mb-10 '><Link className='text-rose-600 text-3xl text-decoration-none' to='/addInventory'>Add New Items</Link></button>
            </div>
        </div >
    );
};

export default ManageInventory;