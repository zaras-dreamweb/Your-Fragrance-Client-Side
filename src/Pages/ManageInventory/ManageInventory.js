import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageInventory.css'

const ManageInventory = () => {

    const [pagesCount, setPagesCount] = useState(0);
    const [exactPage, setExactPage] = useState(0);
    const [size, setSize] = useState(5);

    const [perfumes, setPerfumes] = useState([]);
    useEffect(() => {
        fetch(`https://arcane-wave-63759.herokuapp.com/perfumes?exactPage=${exactPage}&size=${size}`)
            .then(res => res.json())
            .then(data => setPerfumes(data));
    }, [exactPage, size]);



    useEffect(() => {
        fetch('https://arcane-wave-63759.herokuapp.com/perfumesCountItem')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const page = Math.ceil(count / 5);
                setPagesCount(page);
            })
    }, []);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://arcane-wave-63759.herokuapp.com/perfume/${id}`;
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

                                    <th>YOUR FRAGRANCE PERFUME BRANDS</th>
                                    <th className="numeric"> Quantity</th>
                                    <th className="numeric">Price</th>
                                    <th className="numeric">Supplier</th>
                                    <th className="numeric">ID</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td data-title="Company">{perfume.name}</td>
                                    <td data-title="Price" className="numeric">{perfume.quantity}</td>
                                    <td data-title="Change" className="numeric">${perfume.price}</td>
                                    <td data-title="Change" className="numeric">{perfume.supplier}</td>
                                    <td data-title="Open" className="numeric">{perfume._id}</td>
                                    <td data-title="Code"><button onClick={() => handleDelete(perfume._id)} className='p-1 px-2 bg-rose-600 text-white'>Delete</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </p>)
                }
                <div className='pagination flex justify-center mt-12'>
                    {
                        [...Array(pagesCount).keys()]
                            .map(number => <button onClick={() => setExactPage(number)} className={exactPage === number ? 'selected' : ''}>{number + 1}</button>)
                    }

                    <select onChange={event => setSize(event.target.value)}>
                        <option value="5" defaultValue={5}>5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>

            <div className='flex justify-center mx-auto'>
                <button className='bg-black p-2 rounded mb-10 '><Link className='text-rose-600 text-3xl text-decoration-none' to='/addInventory'>Add New Items</Link></button>
            </div>
        </div >
    );
};

export default ManageInventory;