import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/perfume?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [user]);


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
                    const remainingPerfumes = items.filter(perfume => perfume._id !== id);
                    setItems(remainingPerfumes);
                })
        }
    }


    return (
        <div>
            <h2 className='text-center text-4xl mt-20 mb-10'><span className='text-rose-500'>MY</span><span className='text-black'> ITEMS</span></h2>
            <div>
                {
                    items.map(item => <p key={item._id}>
                        <Table className='container' striped bordered hover variant="">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Brand Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><button onClick={() => handleDelete(item._id)} className='p-1 px-2 bg-rose-500 text-white'>X</button></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                </tr>


                            </tbody>
                        </Table>


                    </p>)
                }
            </div>
        </div>
    );
};

export default MyItems;