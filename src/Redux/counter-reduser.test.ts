import {
    changeMaxValueAC,
    changeStartValueAC,
    counterReducer,
    incCounterAC,
    resetCounterAC,
    setIncStartValueAC
} from "./counter-reducer";

test("INC-COUNTER" , ()=>{
   let testState = [
       {id: "currentValue", value: 0},
       {id: "maxValue", value: 0},
       {id: "startValue", value: 0}
     ]

    let newState = counterReducer(testState,incCounterAC("currentValue",2))

    expect(newState).toEqual([
        {id: "currentValue", value: 2},
        {id: "maxValue", value: 0},
        {id: "startValue", value: 0}
    ])
})
test("RESET-COUNTER" , ()=>{
   let testState = [
       {id: "currentValue", value: 5},
       {id: "maxValue", value: 0},
       {id: "startValue", value: 0}
     ]

    let newState = counterReducer(testState,resetCounterAC())

    expect(newState).toEqual([
        {id: "currentValue", value: 0},
        {id: "maxValue", value: 0},
        {id: "startValue", value: 0}
    ])
})
test("CHANGE-MAX-VALUE" , ()=>{
   let testState = [
       {id: "currentValue", value: 0},
       {id: "maxValue", value: 0},
       {id: "startValue", value: 0}
     ]

    let newState = counterReducer(testState,changeMaxValueAC(5))

    expect(newState).toEqual([
        {id: "currentValue", value: 0},
        {id: "maxValue", value: 5},
        {id: "startValue", value: 0}
    ])
})
test("CHANGE-START-VALUE" , ()=>{
   let testState = [
       {id: "currentValue", value: 0},
       {id: "maxValue", value: 0},
       {id: "startValue", value: 0}
     ]

    let newState = counterReducer(testState,changeStartValueAC(8))

    expect(newState).toEqual([
        {id: "currentValue", value: 0},
        {id: "maxValue", value: 0},
        {id: "startValue", value: 8}
    ])
})
test("SET-INC-START-VALUE" , ()=>{
   let testState = [
       {id: "currentValue", value: 0},
       {id: "maxValue", value: 0},
       {id: "startValue", value: 0}
     ]

    let newState = counterReducer(testState,setIncStartValueAC(11))

    expect(newState).toEqual([
        {id: "currentValue", value: 11},
        {id: "maxValue", value: 0},
        {id: "startValue", value: 0}
    ])
})