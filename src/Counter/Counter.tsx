import React from 'react';
import '../App.css';
import {WindowCounter} from "./WindowCounter";
import {ButtonBox} from "./ButtonBox";

export type CounterPropsType = {
    Number: number
    ChangeCounter ?: () => void
    ResetCounter ?: () => void
}

export function Counter(props: CounterPropsType) {

    return (
        <div className={"CounterBox"}>
            <WindowCounter Number={props.Number}/>
            <div className={"ButtonBox"}>
                <ButtonBox
                    Number={props.Number}
                    ChangeCounter={props.ChangeCounter}
                    ResetCounter={props.ResetCounter}/>
            </div>
        </div>
    )
}




