import React, {createContext, useState} from 'react';

export const ContextTime = createContext();

export default function ContextTimeProvider(props) {
    const [data, setData] = useState(0);
    //handleData : pomo,long,short values from nav
    //handleWhich : clicked mode from timer
    //handleSpeed : calculate speed from switch case state.which then value of selected mode sent to nav
    // Timer : which
    const handleData = (val) => {
        setData(val)
    }
    return (
        <ContextTime.Provider value={{handleData, Data : data}}>
            {props.children}
        </ContextTime.Provider>
    )
}