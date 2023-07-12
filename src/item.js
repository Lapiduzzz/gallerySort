import React from "react";
import './App.css';

function Item({img, check, id}) {
    const [isChecked, setIsChecked] = React.useState(check);

    const change = () => {
        setIsChecked(prevState => !prevState)

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
                    isSelected: !isChecked
                }
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    return (
        <div className='item'>
            <img className='image' src={img} alt="img"/>
            <div className='inputWrapper'>
                <input type="checkbox" checked={isChecked} onChange={change}/>
            </div>
        </div>
    );
}

export default Item;
