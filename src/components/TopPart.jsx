import React from 'react';
import './TopPart.scss';
import logo from '../assets/wwe_logo.png';
import lupa from '../assets/lupa.png';

function TopPart() {
    return (
        <div className="TopPart">
            <div className="borde">
                <div className="leftside">
                    <div className="logo">
                        <a href="https://www.google.com">
                            <img src={logo} alt="Logo WWE" />
                        </a>
                    </div>
                    <div className="buttons">
                        <a href="https://watch.wwe.com/" > WWE NETWORK</a>
                        <a href="https://espanol.wwe.com/shows/"> SHOWS </a>
                        <a href="https://espanol.wwe.com/superstars/"> SUPERSTARS </a>
                        <a href="https://espanol.wwe.com/events/"> BOLETOS </a>
                        <a href="http://wweshop.com/?utm_source=WWE&utm_medium=Dotcom&utm_term=top&utm_content=link&utm_campaign=nav"> TIENDA </a>

                    </div>
                </div>


                <div className="SubButton">
                    <a href="https://watch.wwe.com/search" className="SearchIcon">
                        <img src={lupa} alt="Search" />
                    </a>
                    <a href="https://watch.wwe.com/signin"> <div>INICIAR SESIÓN </div></a>
                    <a href="https://www.wwe.com/wwenetwork"> <div>SUSCRIBETE AHORA </div></a>
                </div>
            </div>
            <div className="displaything">

            </div>
        </div>
    )
}

export default TopPart;


