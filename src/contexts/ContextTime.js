import React, {createContext, useState} from 'react';

export const ContextTime = createContext();

export default function ContextTimeProvider(props) {
    const [data, setData] = useState(0);
    const handleData = (val) => {
        setData(val)
    }
    return (
        <ContextTime.Provider value={{handleData, Data : data}}>
            {props.children}
        </ContextTime.Provider>
    )
}