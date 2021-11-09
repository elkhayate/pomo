import React, {createContext, useState} from 'react';

export const ContextTime = createContext();

export default function ContextTimeProvider(props) {
    const [which, setWhich] = useState('pomo');
    const [completed, setCompleted] = useState(false);
    const [speed, setSpeed] = useState(0)
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
    const handleSpeed = (val) => {
        setSpeed(val)
    }
    return (
        <ContextTime.Provider value={{handleWhich, Which : which,handleCompleted, completed, handleSpeed, speed }}>
            {props.children}
        </ContextTime.Provider>
    )
}