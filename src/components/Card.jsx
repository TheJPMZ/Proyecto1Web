import React from 'react';
import './Card.scss';



export default function Card() {

    function gotoDetail() {
        window.location.href = 'https://www.google.com';
    }

    return (

        <div className="cuadrado" onClick={gotoDetail}>
            <div className="image">

                <img src="https://static.wwe9.com/shain/v1/dataservice/ResizeImage/$value?ImageId=%279357408%27&EntityType=%27Item%27&EntityId=%27178550%27&Width=258&Height=145&ImageUrl=%279357408.jpg%27&device=%27web_browser%27&ResizeAction=%27fill%27&HorizontalAlignment=%27center%27&VerticalAlignment=%27top%27" alt=""/>
                <div className="cuadrito"></div>
                <div className="Timestamp"> 3:59:01</div>
            </div>
            <div className="content">
                <h6>WrestleMania 38 Sunday </h6>
                <h7>APR, 02, 2022</h7>
            </div>
        </div>
    )
}

