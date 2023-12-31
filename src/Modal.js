import React from "react";
import './App.css';

function Modal({active, link, setIsActiveModal}) {

    const closeModal = React.useCallback(()=>{
        setIsActiveModal(false)
        const body = document.querySelector('body')
        body.style.overflowY = 'auto'
    },[setIsActiveModal])

    return (
        <div className={`modal ${active ? 'activeModal' : ''}`} onClick={closeModal}>
            <button className={'closeModal'} onClick={closeModal}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 256 256" >
                    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                    <g><g><path fill="#116796" d="M156.2,127l84.1,84.5c7.6,7.7,7.6,20.1,0,27.8c-7.6,7.7-20,7.7-27.6,0l-84.1-84.5l-84.9,85.3c-7.7,7.8-20.2,7.8-27.9,0c-7.7-7.7-7.7-20.3,0-28l84.9-85.4L19.2,44.8c-7.6-7.7-7.6-20.1,0-27.8c7.6-7.7,20-7.7,27.6,0L128.3,99L211,15.9c7.7-7.7,20.2-7.7,27.9,0c7.7,7.8,7.7,20.3,0,28L156.2,127z"/></g></g>
                </svg>
            </button>
            <img src={link} alt="img"/>
        </div>
    );
}

export default Modal;
