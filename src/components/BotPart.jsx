import React from 'react';
import './BotPart.scss';
import logo from "../assets/wwe_logo.png";
import language from "../assets/language.png";
//Se ha utilizado documentacion de bootstrap para el diseño de la pagina
//Link: https://getbootstrap.com/docs/4.0/components/dropdowns/
//Link: https://mdbootstrap.com/docs/standard/tools/builders/footer/


export default function BotPart() {
    function boton () {
        window.location.href = "https://www.wwe.com/es/";
    }

    return (
        <div className="BotPart">
            <hr/>
            <div className="Language">
                <h5>SELECT LANGUAGE</h5>
                <div>
                    <img src={language} alt="language" className="language" onClick={boton}/>
                </div>
            </div>



            <footer className="text-white">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5>CORPORATIVO</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.wwe.com">Corporativo</a>
                                </li>
                                <li>
                                    <a href="https://www.wwe.com">Careers</a>
                                </li>
                                <li>
                                    <a href="https://www.wwe.com">Comunidad</a>
                                </li>
                                <li>
                                    <a href="https://www.wwe.com">Contactanos</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5>WWE.COM</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.wwe.com">WWE Noticias</a>
                                </li>
                                <li>
                                    <a href="https://www.wwe.com">WWE Videos</a>
                                </li>
                                <li>
                                    <a href="https://www.wwe.com">WWE Fotos</a>
                                </li>
                                <li>
                                    <a href="https://www.wwe.com">WWE Worldwide</a>
                                </li>
                                <li>
                                    <a href="https://www.wwe.com">All Access Packages</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5>NOSOTROS</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.wwe.com">Pol. de Privacidad</a>
                                </li>
                                <li>
                                    <a href="https://www.wwe.com">Derechos de Autor</a>
                                </li>
                                <li>
                                    <a href="https://www.wwe.com">Terminos de Uso</a>
                                </li>
                                <li>
                                    <a href="https://www.wwe.com">Cookie Preferences</a>
                                </li>
                                <li>
                                    <a href="https://www.wwe.com">Do Not Sell My Info</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5>AYUDA</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.wwe.com" >Seguridad</a>
                                </li>
                                <li>
                                    <a href="https://www.wwe.com" >Preguntas Frecuentes</a>
                                </li>
                                <li>
                                    <a href="https://www.wwe.com" >Redimir Tarjeta</a>
                                </li>
                                <li>
                                    <a href="https://www.wwe.com" >Cookie Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5>GLOBAL SITES</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.wwe.com" >Spanish</a>
                                </li>
                                <li>
                                    <a href="https://www.wwe.com" >Arabic</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="logo">
                    <a href="https://www.wwe.com">
                        <img src={logo} alt="Logo WWE" />
                    </a>
                </div>
            </footer>
        </div>

    )
}


