import React from 'react';
import usePerfumes from '../../hooks/UsePerfumes';
import Perfume from '../Perfume/Perfume';

const Perfumes = () => {
    const [perfumes, setPerfumes] = usePerfumes();
    return (
        <div className='bg-gradient-to-b from-red-200 to-black text-center'>
            <h2 className=' text-4xl pt-4 mt-10 '>Inventory</h2>
            <div className='pt-10 pb-10'>
                {
                    perfumes.slice(0, 6).map(perfume => <Perfume key={perfume._id} perfume={perfume}></Perfume>)
                }
            </div>
        </div>
    );
};

export default Perfumes;