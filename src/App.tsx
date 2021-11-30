import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {SettingsBox} from './SettingCounter/SettingsBox';

function App() {
    let [number, SetNumber] = useState<number>(0)
    let minNumberValue = 0
    let maxNumberValue = 5
    function ChangeCounter() {
        if (number <= maxNumberValue) {
            SetNumber(number + 1)
        }
    }
    function ResetCounter() {
        SetNumber(minNumberValue)
    }

    return (
        <div className="App">
            <div className="SettingsBox">
                <SettingsBox/>
            </div>
            <div>
                <Counter
                    Number={number}
                    ChangeCounter={ChangeCounter}
                    ResetCounter={ResetCounter}
                />
            </div>
        </div>


    );
}

export default App;
