import React, { useCallback, useMemo, useRef, useState } from 'react';

const UseCallbackExample = () => {

    const [string,setString] = useState('');
    const [stringList,setStringList] = useState([]);

    const inputText = useRef();
    const clickCount = useRef(0);   // 로컬 변수

    // const change = (e) => {
    //     setString(e.target.value);
    // }

    const change = useCallback((e) => {
        setString(e.target.value);
    },[])

    // const insert = () => {
    //     const newList = stringList.slice();
    //     newList.push(string);
    //     setStringList(newList);
    // }

    const insert = useCallback(() => {
        const newList = stringList.slice();
        newList.push(string);
        setStringList(newList);


        // ref focuse
        inputText.current.focus();

        clickCount.current = clickCount.current + 1;

    },[string,stringList])

    // const sum = (list) => {
    //     console.log('문자들을 합치는 중입니다...');
    //     let stringSum = '';
    //     for(let value of list){
    //         stringSum += value + ' ';
    //     }
        
    //     return stringSum;
    // }

    const sum = useCallback((list)=>{
        console.log('문자들을 합치는 중입니다...');
        let stringSum = '';
        for(let value of list){
            stringSum += value + ' ';
        }
        
        return stringSum;
    },[])

    const result = useMemo(() => sum(stringList), [stringList,sum]);


    console.log('result : ' + result);
    console.log('clickCount : ' + clickCount.current);


    return (
        <div className='container'>
            <input type='text' ref={inputText} onChange={change}/>
            <button onClick={insert} className="btn btn-primary btn-sm">문자열 추가</button>            
            합계 : {result}
            <p>click count : {clickCount.current}</p>
        </div>
    );
};

export default UseCallbackExample;