import { createContext } from "react";


export const BoxContent = createContext();

export const IndexContext = createContext();

export const indexInitState = {
    text:'기본값',
    count:0
}

export const indexReducer = (state,action) => {
    switch(action.type){
        case 'fnKor' : {
            return {
                ...state,
                text:'안녕하세요~'
            }
        }
        case 'fnEng' : {
            return {
                ...state,
                text:'Hello~'
            }
        }
        case 'fnPlusCnt' : {
            return {
                ...state,
                count: state.count+1
            }            
        }
        case 'fnMinusCnt' : {
            return {
                ...state,
                count: state.count -1
            }
        }
    }
}
