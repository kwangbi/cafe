import React from 'react';
import {useReducer} from 'react'
import {indexInitState,indexReducer} from '../reducer/indexReducer'

const Hooks = () => {
    const [state,dispatch] = useReducer(indexReducer,indexInitState)

    return (
        <div>
            <button onClick={() => {dispatch({type:'fnKor'})}} className="btn btn-primary btn-lg">νκΈ</button>
            <button onClick={() => {dispatch({type:'fnEng'})}} className="btn btn-primary btn-lg">μμ΄</button>
            <div>{state.text}</div>
            <button onClick={() => {dispatch({type:'fnPlusCnt'})}} className="btn btn-primary btn-lg">+</button>
            <button onClick={() => {dispatch({type:'fnMinusCnt'})}} className="btn btn-primary btn-lg">-</button>
            <div>{state.count}</div>

        </div>
    );
};

export default Hooks;