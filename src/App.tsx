import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardType} from "./Redux/Reducers/cardReducer";
import {connect} from "react-redux";
import {AppStateType} from "./Redux/store";
import {Card} from "./Components/card";
import SCommon from "./common.module.css"
import BG from "./img/background.png"

type PropsType = {
    cards: Array<CardType>
}


export const App: FC<PropsType> = (props) => {
    const Cards = props.cards.map( el => <Card key={el.id} card={el}/>)
    return (
        <div className={SCommon.container__width}>
            <div className={`${SCommon.header_text__center}`}>
                <span className={`${SCommon.header_text__params}`}>Ты сегодня покормил кота?</span>
            </div>
            <div className={SCommon.display__flex}>
                {Cards}
            </div>
        </div>
    );
}

let mapStateToProps = (state: AppStateType) => {
    return {
        cards: state.cardReducer.cards
    }
}

export const AppWrapper = connect(mapStateToProps, {})(App)
