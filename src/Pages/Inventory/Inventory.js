import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import usePerfumeDetail from '../../hooks/usePerfumeDetail';

const Inventory = () => {
    const { id } = useParams();
    const [perfumeDetail] = usePerfumeDetail(id);
    console.log(perfumeDetail);

    return (
        <div>
            <div className='bg-gradient-to-r from-pink-500 to-black pb-10 mt-2'></div>
            <div className="card mb-3 w-50 mt-10 mx-auto">
                <div className="card-header text-pink-500 font-semibold text-center text-3xl">{perfumeDetail.name}</div>
                <img style={{ height: "300px", width: "300px" }} src={perfumeDetail.image} className="img-fluid rounded-start mx-auto pt-2" alt="..." />
                <div className="card-body text-pink-500 text-center">
                    <h5 className="card-title"><strong className='text-black'>Price:</strong> {perfumeDetail.price}</h5>
                    <p className="card-text"><strong className='text-black'>Quantity:</strong> {perfumeDetail.quantity}</p>
                    <p className="card-text"><strong className='text-black'>Supplier:</strong> {perfumeDetail.supplier}</p>
                    <p className="card-text"><strong className='text-black'>Description:</strong> {perfumeDetail.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Inventory;