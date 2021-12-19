 type initialStateType = {
    id: string
    value: number
}

 export let initialState: Array<initialStateType> = [
    {id: "currentValue", value: 0},
    {id: "maxValue", value: 0},
    {id: "startValue", value: 0}
]

 type incCounterAT = {
    type: "INC-COUNTER"
    id: string
    value: number
}
 type changeMaxValueAT = {
    type: "CHANGE-MAX-VALUE"
    value: number
}
 type changeStartValueAT = {
    type: "CHANGE-START-VALUE"
    value: number
}
 type resetCounterAT = {
    type: "RESET-COUNTER"
}
 type setIncStartValueAT= {
     type: "SET-INC-START-VALUE"
     settingMinValue:number,
 }

 type actionType = incCounterAT | changeMaxValueAT | changeStartValueAT | resetCounterAT | setIncStartValueAT

 export const counterReducer = (state: Array<initialStateType> = initialState, action: actionType): Array<initialStateType> => {
    switch (action.type) {
        case "INC-COUNTER":
            return state.map(el => el.id === action.id ? {...el, value: action.value} : el)
        case "RESET-COUNTER":
            return state.map(el => el.id === "currentValue" ? {...el, value: 0} : el)
        case "CHANGE-MAX-VALUE":
            return state.map(el => el.id === "maxValue" ? {...el, value: action.value} : el)
        case "CHANGE-START-VALUE":
            return state.map(el => el.id === "startValue" ? {...el, value: action.value} : el)
        case "SET-INC-START-VALUE":
            return state.map(el => el.id ==="currentValue" ? {...el, value: action.settingMinValue} : el)

    }
}


 export const incCounterAC = (id: string, value: number): incCounterAT => {
    return {
        type: "INC-COUNTER",
        id: id,
        value: value
    }
}
 export const resetCounterAC = (): resetCounterAT => {
    return {type: "RESET-COUNTER"}
}
 export const changeMaxValueAC = (value: number): changeMaxValueAT => {
    return {
        type: "CHANGE-MAX-VALUE",
        value: value
    }
}
 export const changeStartValueAC = (value: number): changeStartValueAT => {
    return {
        type: "CHANGE-START-VALUE",
        value: value
    }
}
 export const setIncStartValueAC =  (settingMinValue : number): setIncStartValueAT => {
    return{
        type: "SET-INC-START-VALUE",
        settingMinValue:settingMinValue
    }
 }

