import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    changeMaxValueAC,
    changeStartValueAC,
    incCounterAC,
    initialStateType,
    resetCounterAC, setIncStartValueAC
} from "../Redux/counter-reducer";
import {AppStateType} from "../Redux/store";
import {NewCounter} from "./NewCounter";

export type statePropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    state: Array<initialStateType>
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        state: state.counter
    }
}

type mapDispatchToPropsType = {
    incCounter: () => void
    resetCounter: () => void
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
    setIncStartValue: (settingMinValue: number) => void
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        incCounter: () => {
            dispatch(incCounterAC())
        },
        resetCounter: () => {
            dispatch(resetCounterAC())
        },
        changeMaxValue: (value: number) => {
            dispatch(changeMaxValueAC(value))
        },
        changeStartValue: (value: number) => {
            dispatch(changeStartValueAC(value))
        },
        setIncStartValue: (settingMinValue: number) => {
            dispatch(setIncStartValueAC(settingMinValue))
        },
    }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(NewCounter)
export default CounterContainer