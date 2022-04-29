import React from 'react';
import TopPart from "./TopPart";
import BotPart from "./BotPart";
import Carrousel from "./Carrousel";
import "./App.scss";

export default function App(){
    return (
        <>
            <TopPart/>
            <Carrousel/>
            <Carrousel/>
            <BotPart/>
        </>
    )
}
