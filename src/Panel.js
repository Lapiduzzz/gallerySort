import React from "react";
import './App.css';

function Panel({setActiveButton}) {

    const changeActiveButton = React.useCallback((button)=>{
        return () => {
            setActiveButton(button)
        }
    },[setActiveButton])

    return (
        <div className='panel'>
            <button className='button' onClick={changeActiveButton('selected')}>Отмеченные</button>
            <button className='button' onClick={changeActiveButton('notSelected')}>Не отмеченные</button>
            <button className='button' onClick={changeActiveButton('all')}>Все</button>
        </div>
    );
}

export default Panel;
