import React, {useReducer} from 'react'
import Context,{initialState} from './store'
import {reducer} from './reducer'

const Provider = props => {
    const [state, dispatch] = useReducer(reducer,initialState)
    return(
        <Context.Provider value={{state, dispatch}}>
            {props.children}
        </Context.Provider>
    )
}
export default Provider