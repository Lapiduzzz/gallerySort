import React from "react";
import './App.css';
import Item from "./item";


function App() {
    const [item, setItem] = React.useState([])

  async function x() {
    const url = 'https://api.airtable.com/v0/app39R6x46PS6y2Xg/Table%202';
    const token = 'Bearer patXYYCZSy7EWv4Sd.bd7b72504b0fd980f3df0a5894dca86a128bca482f48a7e3ff8a37dec4460ee9';

    fetch(url, {
      headers: {
        'Authorization': token
      }
    })
        .then(response => response.json())
        .then(data => {
           data.records.forEach(el=>{
               setItem(prev => [...prev, {
                            'id' : el.id,
                           'img' : el.fields.image[0].url,
                           'isSelected' : el.fields.isSelected || false
                       }])
          })
        })
        .catch(error => console.error(error));
  }

  React.useEffect(()=>{
      if(item.length < 1){
          x();
      }
      // eslint-disable-next-line
  },[])


  return (
    <div className="App">
        {item.map(item => (<Item img={item.img} check={item.isSelected} id={item.id}/>))}
    </div>
  );
}

export default App;
