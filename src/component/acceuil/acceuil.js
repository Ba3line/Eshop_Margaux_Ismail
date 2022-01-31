import './acceuil.css'

import React from 'react';

function Acceuil(props) {
    return (
        <div onClick={props.offAcceuil}>
            <div className="card bg-dark w-25" style={{height: '600px'}}>
                <img src={props.image} className="card-img h-50" alt="..." />
                    <div className="card-img-overlay text-center mt-5">
                        <h5 className="card-title h-100 text-light">{props.nomCategorie}</h5>
                    </div>
            </div>
        </div>
    );
}

export default Acceuil;
