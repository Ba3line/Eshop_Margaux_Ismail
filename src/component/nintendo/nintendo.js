import './nintendo.css'

import React from 'react';

function Nintendo(props) {
    return (
        <div>
            <div onClick={props.offAcceuil} className="card">
                <img src={props.imageArticle} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.nomArticle}</h5>
                        <p className="card-text">{props.descriptionArticle}</p>
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-link">{props.prixArticle}</a>
                        <a href="#" className="card-link">{props.ajouterPanier}</a>
                    </div>
            </div>
        </div>
    );
}

export default Nintendo;
