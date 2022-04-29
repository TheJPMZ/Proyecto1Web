import React from 'react';
import TopPart from "./TopPart";
import BotPart from "./BotPart";
import Carrousel from "./Carrousel";
import Backimage from "./Backimage";
import LongCarrousel from "./LongCarrousel"
import "./App.scss";

export default function App(){
    return (
        <>
            <TopPart/>
            <Backimage/>
            <Carrousel/>
            <LongCarrousel/>
            <Carrousel/>
            <LongCarrousel/>
            <Carrousel/>
            <Carrousel/>
            <Carrousel/>
            <Carrousel/>
            <Carrousel/>
            <Carrousel/>
            <Carrousel/>
            <Carrousel/>
            <Carrousel/>
            <BotPart/>
        </>
    )
}
