import React from "react";
import './App.css';
import CustomCheckbox from "./CustomCheckbox";

function Item({img, check, id, x, activeButton, setIsActiveModal, setLinkZoomedImage}) {

    const [checkDisabled, setCheckDisabled] = React.useState(false)

    const change = () => {
        setCheckDisabled(true)
        const url = `https://api.airtable.com/v0/app39R6x46PS6y2Xg/Table%201/${id}`;
        const token = 'Bearer patXYYCZSy7EWv4Sd.bd7b72504b0fd980f3df0a5894dca86a128bca482f48a7e3ff8a37dec4460ee9';

        fetch(url, {
            method: 'PATCH',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fields: {
                    isSelected: !check
                }
            })
        })
            .then(response => response.json())
            .then(() => x())
            .catch(error => console.error(error));
    }

    React.useEffect(()=>{
        setCheckDisabled(false)
    },[check])

    const isSelected = check && activeButton !== 'selected'

    const openModal = React.useCallback(() => {
        setIsActiveModal(true)
        setLinkZoomedImage(img)
        const body = document.querySelector('body')
        body.style.overflowY = 'hidden'
    }, [setIsActiveModal, setLinkZoomedImage, img])

    return (
        <div className={`item ${isSelected ? 'selectedItem' : ''}`}>
            <img className={`image ${isSelected ? 'selectedImage' : ''}`} src={img} alt="img" onClick={openModal}/>
            <div className='inputWrapper'>
                <CustomCheckbox checked={check} onChange={change} disabled={checkDisabled}/>
            </div>
        </div>
    );
}

export default Item;
