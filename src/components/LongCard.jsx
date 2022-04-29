import React from 'react';
import './LongCard.scss';



export default function Card() {

    function gotoDetail() {
        window.location.href = 'https://www.google.com';
    }

    return (

        <div className="Longcuadrado" onClick={gotoDetail}>
            <div className="Longimage">

                <img src="https://static.wwe9.com/shain/v1/dataservice/ResizeImage/$value?ImageId='9236219'&EntityType='Item'&EntityId='164020'&Width=229&Height=344&ImageUrl='9236219.jpg'&device='web_browser'&ResizeAction='fill'&HorizontalAlignment='center'&VerticalAlignment='top'" alt=""/>
                <div className="Longcuadrito"></div>
                <div className="LongTimestamp"> 3:59:01</div>
            </div>
            <div className="Longcontent">
                <h6>WrestleMania 38 Sunday </h6>
                <h7>APR, 02, 2022</h7>
            </div>
        </div>
    )
}

