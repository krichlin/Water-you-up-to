import React, {useState, useEffect} from "react";
import ListDisplay from './ListDisplay'

function MainDisplay() {

  const [listItem, setListItem] = useState([])
  
  useEffect(() => {
    fetch('https://json-server-template-tiiu.onrender.com/Logs')
    .then((res) => res.json())
    .then((data) => {
        setListItem(data)
        // console.log(listItem)
    })
  }, [])

      return (
        <ul>
            <ListDisplay logs={listItem}/>
        </ul>
      )
}

export default MainDisplay