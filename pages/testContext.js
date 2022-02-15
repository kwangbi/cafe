import React from 'react';
import { useReducer, useContext } from 'react';
import {IndexContext,BoxContent,indexInitState,indexReducer} from '../reducer/indexReducer'

/*
    reducer & context
*/

function Box3(){
    const boxName = useContext(BoxContent);
    return (
        <div>
            박스이름 : {boxName}
        </div>
    )
}

function Box2(){
    const [state,dispatch] = useContext(IndexContext);

    return (
        <div>
            <button onClick={() => {dispatch({type:'fnKor'})}} className="btn btn-primary btn-lg">한글</button>
            <button onClick={() => {dispatch({type:'fnEng'})}} className="btn btn-primary btn-lg">영어</button>
            <div>{state.text}</div>
        </div>
    )
}



function Box1(){
    const [state,dispatch] = useContext(IndexContext);

    return (
        <div>
            <IndexContext.Provider value={useReducer(indexReducer,indexInitState)}>
                <Box2/>
            </IndexContext.Provider>            
            <button onClick={() => {dispatch({type:'fnPlusCnt'})}} className="btn btn-primary btn-lg">+</button>
            <button onClick={() => {dispatch({type:'fnMinusCnt'})}} className="btn btn-primary btn-lg">-</button>
            <div>{state.count}</div>            
        </div>
    )
}



const TestContext = () => {
    const boxName = "새로운 박스이름";
    return (
        <div>
            <IndexContext.Provider value={useReducer(indexReducer,indexInitState)}>
                <BoxContent.Provider value={boxName}>
                    <Box1/>
                    <Box3/>
                </BoxContent.Provider>
            </IndexContext.Provider>
        </div>
    );
};

export default TestContext;