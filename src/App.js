import React from "react";
import './App.css';
import Item from "./item";
import Panel from "./Panel";
import Modal from "./Modal";


function App() {
    const [items, setItem] = React.useState([])
    const [activeButton, setActiveButton] = React.useState('all')
    const [filteredItems, setFilteredItems] = React.useState([])

    const [linkZoomedImage, setLinkZoomedImage] = React.useState('')

    const [isActiveModal, setIsActiveModal] = React.useState('')

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
            setItem([])
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
      if(items.length < 1){
          x();
      }
      // eslint-disable-next-line
  },[])

React.useEffect(()=>{
    setFilteredItems( items.filter((item)=> {
        if (activeButton === 'selected'){
            return item.isSelected
        }
        if (activeButton === 'notSelected'){
            return !item.isSelected
        }
        else return true
    }))
},[items, activeButton])

  return (
    <div className="App">
        <Modal active={isActiveModal} link={linkZoomedImage} setIsActiveModal={setIsActiveModal}/>
        {filteredItems.map((item) => (<Item
            img={item.img}
            check={item.isSelected}
            id={item.id}
            x={x}
            activeButton={activeButton}
            setIsActiveModal={setIsActiveModal}
            setLinkZoomedImage={setLinkZoomedImage}
        />))}
        <Panel setActiveButton={setActiveButton}/>
    </div>
  );
}

export default App;
