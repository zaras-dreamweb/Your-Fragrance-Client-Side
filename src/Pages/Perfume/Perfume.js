import React from 'react';
import { useNavigate } from 'react-router-dom';

const Perfume = ({ perfume }) => {
    const { name, image, price, description, supplier, quantity, _id } = perfume;
    const navigate = useNavigate();

    const handleStockUpdate = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='w-50 mx-auto'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text"><small className="text-muted">Price: ${price}</small></p>
                            <p className="card-text"><small className="">Quantity: <strong>{quantity}</strong> </small></p>
                            <p className="card-text"><small className="text-muted">Supplier: {supplier}</small></p>
                            <p className="card-text">Description: {description}</p>
                            <button onClick={() => handleStockUpdate(_id)} type="button" class="btn btn-outline-danger">Stock Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfume;