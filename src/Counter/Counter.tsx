import React from 'react';
import '../App.css';
import {WindowCounter} from "./WindowCounter";
import {ButtonBox} from "./ButtonBox";

type CounterPropsType = {
    currentValue: number
    IncCounter: () => void
    ResetCounter: () => void
    startValue: number
    maxValue: number
}

export function Counter(props: CounterPropsType) {

    return (
        <div className={"CounterBox"}>
            <WindowCounter
                maxValue={props.maxValue}
                startValue={props.startValue}
                currentValue={props.currentValue}
            />
            <div className={"ButtonBox"}>
                <ButtonBox
                    maxValue={props.maxValue}
                    currentValue={props.currentValue}
                    IncCounter={props.IncCounter}
                    ResetCounter={props.ResetCounter}
                />
            </div>
        </div>
    )
}




