import React from 'react';
import { Link } from 'react-router-dom';
import usePerfumes from '../../hooks/UsePerfumes';
import Perfume from '../Perfume/Perfume';

const Perfumes = () => {
    const [perfumes] = usePerfumes();
    return (
        <div className='bg-gradient-to-b from-red-200 to-black text-center'>
            <h2 className=' text-4xl pt-4 mt-10 font-bold text-rose-500'>Our Perfumes</h2>
            <div className='pt-10 pb-10'>
                {
                    perfumes.slice(0, 6).map(perfume => <Perfume key={perfume._id} perfume={perfume}></Perfume>)
                }
            </div>
            <button className=' bg-transparent pb-5 '><Link className='text-rose-600 text-3xl text-decoration-none' to='/manageInventory'>Manage Inventories</Link></button>
        </div >
    );
};

export default Perfumes;