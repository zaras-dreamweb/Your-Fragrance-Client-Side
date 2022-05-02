import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const AddInventory = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/perfume`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                const { data } = result;
                if (data.insertedId) {
                    toast("Added Item!");
                }
            })
    };
    return (
        <div className='w-50 mx-auto mb-40'>
            <h2 className='text-center text-4xl mt-20 mb-10'><span className='text-rose-500'>ADD</span><span className='text-black'> NEW</span> <span className='text-rose-500'>PERFUMES</span></h2>
            <form className='flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 border-4' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3 border-4' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3 border-4' placeholder='Supplier' type="text" {...register("supplier")} />
                <input className='mb-3 border-4' placeholder='Quantity' {...register("quantity")} />
                <input className='mb-3 border-4' placeholder='Photo URL' type="text" {...register("image")} />
                <input className='mb-3 border-4' value={user.email} readOnly placeholder='Email' {...register("email")} />
                <input className='bg-rose-600 text-white' type='submit' value="Add Perfume" />
                <ToastContainer></ToastContainer>
            </form>
        </div>
    );
};

export default AddInventory;