import React, {createContext, useState} from 'react';

export const ContextTime = createContext();

export default function ContextTimeProvider(props) {
    const [which, setWhich] = useState('pomo');
    const [completed, setCompleted] = useState(false);
    //handleData : pomo,long,short values from nav
    //handleWhich : clicked mode from timer
    //handleSpeed : calculate speed from switch case state.which then value of selected mode sent to nav
    // Timer : which
    const handleWhich = (val) => {
        setWhich(val)
    }
    const handleCompleted = () => {
        setCompleted(!completed)
    }
    return (
        <ContextTime.Provider value={{handleWhich, Which : which,handleCompleted, completed }}>
            {props.children}
        </ContextTime.Provider>
    )
}