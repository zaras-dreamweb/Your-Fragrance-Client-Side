import React from 'react';
import usePerfumes from '../../hooks/UsePerfumes';
import Perfume from '../Perfume/Perfume';

const Perfumes = () => {
    const [perfumes, setPerfumes] = usePerfumes();
    return (
        <div>
            <h2 className='text-center text-6xl pt-10 pb-6'>Inventory</h2>
            <div>
                {
                    perfumes.slice(0, 6).map(perfume => <Perfume key={perfume._id} perfume={perfume}></Perfume>)
                }
            </div>
        </div>
    );
};

export default Perfumes;