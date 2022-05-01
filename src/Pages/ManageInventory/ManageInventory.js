import React from 'react';
import { Link } from 'react-router-dom';
import usePerfumes from '../../hooks/UsePerfumes';

const ManageInventory = () => {
    const [perfumes, setPerfumes] = usePerfumes();
    return (
        <div className='text-center'>
            <h2 className='text-center text-4xl mt-20 mb-10'><span className='text-rose-500'>MANAGE</span><span className='text-black'> INVENTORY</span></h2>
            <div className='pt-10 pb-10 mb-20'>
                {
                    perfumes.map(perfume => <p key={perfume._id}>
                        <table class="container table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col"><button>X</button></th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"></th>
                                    <td>{perfume.name.slice(0, 5)}</td>
                                    <td>{perfume.quantity}</td>
                                    <td>{perfume.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>)
                }
            </div>
        </div >
    );
};

export default ManageInventory;