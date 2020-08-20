import React, {FC, useState} from "react";
import {CardType} from "../Redux/Reducers/cardReducer";
import SCommon from "../common.module.css"
import {url} from "inspector";

type PropsType = {
    card: CardType
}

export const Card: FC<PropsType> = (props) => {
    const [selected, setSelected] = useState(false)
    const [mouseLeave, setMouseLeave] = useState(false)
    const [isCan, setIsCan] = useState(false)
    const gifts = props.card.data.gifts.map(el => <div><span>{el}</span></div>)
    const availableDescr = props.card.data.descriptions.available.footer.split(' ')
    const cardClassesDef = `${SCommon.container_card__margins} ${SCommon.container_cardFigure} ${SCommon.container_cardFigure__default}`
    const cardCornerDef = `${SCommon.container_cornerBorder__square} ${SCommon.container_colorItems__default}`
    const cardLeftLineDef = `${SCommon.container_lineLeft__squarePosition} ${SCommon.container_line__square} ${SCommon.container_colorItems__default}`
    const cardBottomLineDef = `${SCommon.container_lineBot__squarePosition} ${SCommon.container_line__square} ${SCommon.container_colorItems__default}`
    const cardWeightBackDef = `${SCommon.container_weight__decor} ${SCommon.container_colorItems__default} ${SCommon.container_colorItems__default}`
    const cardClassesSel = `${SCommon.container_card__margins} ${SCommon.container_cardFigure} ${SCommon.container_cardFigure__selected}`
    const cardCornerSel = `${SCommon.container_cornerBorder__square} ${SCommon.container_colorItems__selected}`
    const cardLeftLineSel = `${SCommon.container_lineLeft__squarePosition} ${SCommon.container_line__square} ${SCommon.container_colorItems__selected}`
    const cardBottomLineSel = `${SCommon.container_lineBot__squarePosition} ${SCommon.container_line__square} ${SCommon.container_colorItems__selected}`
    const cardWeightBackSel = `${SCommon.container_weight__decor} ${SCommon.container_colorItems__selected}`
    const cardClassesOut = `${SCommon.container_card__margins} ${SCommon.container_cardFigure} ${SCommon.container_cardFigureOutOff}`
    const cardCornerOut = `${SCommon.container_cornerBorder__square} ${SCommon.container_colorItems__OutOff}`
    const cardLeftLineOut = `${SCommon.container_lineLeft__squarePosition} ${SCommon.container_line__square} ${SCommon.container_colorItems__OutOff}`
    const cardBottomLineOut = `${SCommon.container_lineBot__squarePosition} ${SCommon.container_line__square} ${SCommon.container_colorItems__OutOff}`
    const cardWeightBackOut = `${SCommon.container_weight__decor} ${SCommon.container_colorItems__OutOff}`
    const setSelect = () => {
        setSelected(!selected)
        setIsCan(false)
        // debugger
    }
    const leaveMouse = () => {
        setMouseLeave(true)
        setIsCan(true)
        console.log('out')
        // debugger
    }
    const overMouse = () => {
        setMouseLeave(false)
    }
    const forTouch = () => {
        setSelected(!selected)
        // setMouseLeave(true)
        setIsCan(true)
        // debugger
    }
    // debugger
    return (
        <div>
            <div onMouseLeave={leaveMouse}
                 onMouseOver={overMouse}
                 onClick={setSelect}
                 onTouchEndCapture={forTouch}
                 className={props.card.isAvailable ? selected && isCan ? cardClassesSel : cardClassesDef : cardClassesOut}>
                <div className={props.card.isAvailable ? selected && isCan ? cardCornerSel : cardCornerDef : cardCornerOut}></div>
                <div className={props.card.isAvailable ? selected && isCan ? cardLeftLineSel : cardLeftLineDef : cardLeftLineOut}></div>
                <div className={props.card.isAvailable ? selected && isCan ? cardBottomLineSel : cardBottomLineDef : cardBottomLineOut}></div>
                <div className={`${!props.card.isAvailable && SCommon.outOff__opacity} ${SCommon.box_header__decor}`}>
                    {props.card.isAvailable && !mouseLeave && isCan && selected ?
                        <span className={SCommon.box_headerSelectedHover__decor}>Котэ не одобряет?</span> :
                        <span>{props.card.data.descriptions.available.header}</span>}
                </div>
                <div className={`${!props.card.isAvailable && SCommon.outOff__opacity} ${SCommon.box_name__decor}`}><span>{props.card.data.name}</span></div>
                <div className={`${!props.card.isAvailable && SCommon.outOff__opacity} ${SCommon.box_name__taste}`}><span>{props.card.data.taste}</span></div>
                <div className={`${SCommon.box_descript__decor}`}>
                    <div><span>{`${props.card.data.portions} порций`}</span></div>
                    <div><span>{gifts}</span></div>
                </div>
                <div className={`${!props.card.isAvailable && SCommon.outOff__opacity} ${SCommon.container_img__position} `}><img
                    className={`${SCommon.container_img__width}`} src={props.card.data.photo} alt="Котэ"/></div>
                <div className={props.card.isAvailable ? selected && isCan ? cardWeightBackSel : cardWeightBackDef : cardWeightBackOut}>
                    <div className={`${SCommon.container_weight_number__font}`}><span>{props.card.data.weight}</span>
                    </div>
                    <div className={`${SCommon.container_weight_unit__font}`}><span>{props.card.data.unit}</span></div>
                </div>
            </div>
            {props.card.isAvailable ? isCan && selected ? <div className={SCommon.footer_textSelected__decor}>
                    <span>{props.card.data.descriptions.selected.footer}</span></div> :
                <div className={SCommon.footer_textDef__center}>
                    <span
                        className={SCommon.footer_textDef__decor}>{availableDescr.splice(0, availableDescr.length - 1).join(' ')}</span>
                    <span onMouseLeave={leaveMouse}
                          onMouseOver={overMouse}
                          onClick={setSelect} className={SCommon.footer_textBuy__decor}> {availableDescr[availableDescr.length - 1]}</span>
                </div> : <div className={SCommon.footer_textOutOff__decor}><span>{props.card.data.descriptions.outOff.footer}</span></div>}
        </div>
    )
}
