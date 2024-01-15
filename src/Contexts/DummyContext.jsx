import { createContext, useReducer } from "react";

//example of cover context using reducer
const AgeContext = createContext();

const aggReducer = (state, action) => {//reducer function calling syntax
    switch (action.type) {
        case 'ADD_ONE':
            return state + 1;
        case 'ADD_FIVE':
            return state + 5;
        case 'ADD_NUM':
            return state + action.num;//function argument get cheyan action.argument 
        default:
            return state;
    }
};
 //example in using components
dispatch({ type: 'ADD_ONE' })//example of using dispatch in the component
dispatch({ type: 'ADD_FIVE' });
dispatch({ type: "ADD_NUM", num: 7 });

const AgeContextProvider = (props) => {
    // const [age, setAge] = useState(20);
    const [age, dispatch] = useReducer(aggReducer, 20);//reducer function make by useReducer hook,aggReducer is using reducer Action type,20 is the  value intial by the state
    return (
        <AgeContext.Provider value={(age,dispatch/* ageReducer funcion call one single value is dipathch. it contain all case in the function*/ )}>
            {props.children}
        </AgeContext.Provider>
    )
}

export default AgeContextProvider