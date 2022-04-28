import React from 'react';
import './Card.scss';

export default function Card() {
    return (

        <div className="cuadrado">
            <div className="image">
                <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
            </div>
            <div className="content">
                <h6>WrestleMania 38 Sunday </h6>
                <h7>APR, 02, 2022</h7>
            </div>
        </div>
    )
}


