import {statePropsType} from "./CounterContainer";
import {SettingsBox} from "../SettingCounter/SettingsBox";
import {Counter} from "./Counter";


export function NewCounter(props: statePropsType) {


    let CopyState = props.state.map(el => {
        return {...el}
    })
    let currentValue = 0
    let ObjCurrentValue = CopyState.find(el => el.id === "currentValue")
    if (ObjCurrentValue) {
        currentValue = ObjCurrentValue.value
    }

    let maxValue = 0
    let ObjMaxValue = CopyState.find(el => el.id === "maxValue")
    if (ObjMaxValue) {
        maxValue = ObjMaxValue.value
    }

    let startValue = 0
    let ObjStartValue = CopyState.find(el => el.id === "startValue")
    if (ObjStartValue) {
        startValue = ObjStartValue.value
    }

    let settingBox = <SettingsBox
        changeStartValue={props.changeStartValue}
        changeMaxValue={props.changeMaxValue}
        startValue={startValue}
        maxValue={maxValue}
        setIncStartValue={props.setIncStartValue}/>


    let counter = <Counter
        currentValue={currentValue}
        startValue={startValue}
        maxValue={maxValue}
        IncCounter={props.incCounter}
        ResetCounter={props.resetCounter}
    />

    return (
        <div className="App">
            <div className="SettingsBox">
                {settingBox}
            </div>
            <div>
                {counter}
            </div>
        </div>


    )
}