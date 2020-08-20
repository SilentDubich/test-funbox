import {applyMiddleware, combineReducers, createStore} from "redux";
import {cartInstructions} from "./Reducers/cardReducer";
import thunk from "redux-thunk";


let allReducers = combineReducers({
    cardReducer: cartInstructions
})

type ReducersType = typeof allReducers
export type AppStateType = ReturnType<ReducersType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export const store = createStore(allReducers, applyMiddleware(thunk))
