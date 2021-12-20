import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SettingsBox} from './SettingCounter/SettingsBox';
import {NewCounter} from "./Counter/NewCounter";
import CounterContainer from "./Counter/CounterContainer";



function App(){
    return(
        <CounterContainer/>
    )
}

/*
function App() {

    let [currentValue, SetCurrentValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    let [startValue, setStartValue] = useState<number>(0)



    function IncCounter() {
        if (currentValue <= maxValue) {
            SetCurrentValue(currentValue + 1)
        }
    }

    function ResetCounter() {
        SetCurrentValue(0)
    }

    const changeMaxValue = (value: number) => {
        setMaxValue(value)
    }
    const changeStartValue = (value: number) => {
        SetCurrentValue(value)
    }


    const setMaxValueCB = (currentValue: number) => {
        setMaxValue(currentValue)
    }
    const setStartValueCB = (currentValue: number) => {
        setStartValue(currentValue)
    }

    useEffect(() => {
        getFromLocalCounter()
        getFromLocalMaxCounter()
    }, [])
    useEffect(() => {
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
    }, [maxValue])

    useEffect(() => {
        localStorage.setItem('counterStartValue', JSON.stringify(startValue))
    }, [startValue])


    const getFromLocalCounter = () => {
        let valueAsStringToLocalStorageMaxValue = localStorage.getItem('counterMaxValue')
        if (valueAsStringToLocalStorageMaxValue) {
            let newMaxValue = JSON.parse(valueAsStringToLocalStorageMaxValue)
            setMaxValue(newMaxValue)
        }
    }
    const getFromLocalMaxCounter = () => {
        let valueAsStringToLocalStorageStartValue = localStorage.getItem("counterStartValue")
        if (valueAsStringToLocalStorageStartValue) {
            let newStartValue = JSON.parse(valueAsStringToLocalStorageStartValue)
            setStartValue(newStartValue)
        }
    }

    return (

        <div className="App">
            <div className="SettingsBox">
                <SettingsBox
                    maxValue={maxValue}
                    startValue={startValue}
                    setMaxValueCB={setMaxValueCB}
                    setStartValueCB={setStartValueCB}
                    changeStartValue={changeStartValue}
                    changeMaxValue={changeMaxValue}
                />
            </div>
            <div>
                <Counter
                    startValue={startValue}
                    maxValue={maxValue}
                    currentValue={currentValue}
                    IncCounter={IncCounter}
                    ResetCounter={ResetCounter}
                />
            </div>
        </div>


    );
}

*/

export default App;
