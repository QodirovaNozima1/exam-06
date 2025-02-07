import {useReducer,useContext,createContext, Children} from "react"
import { initialState } from "./reducer"


const Context = createContext()
export const ContextProvider = ({children, reducer, initialState})=>{
    const value = useReducer(reducer, initialState)
    return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useStateValue = () => useContext(Context)