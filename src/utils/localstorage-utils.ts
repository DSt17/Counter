import {AppStateType} from "../Redux/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('currentValue');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


export const saveState = (state: AppStateType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('currentValue', serializedState);
    } catch {
        // ignore write errors
    }
};