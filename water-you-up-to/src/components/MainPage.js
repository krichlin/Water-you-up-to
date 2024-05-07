import React, {useState, useEffect} from "react";
import LogForm from './LogForm'
import MainDisplay from "./MainDisplay";

function MainPage() {

    const [listItem, setListItem] = useState([])

    useEffect(() => {
        fetch('http://localhost:6001/Logs')
        .then((res) => res.json())
        .then((data) => {
            setListItem(data)
            console.log(listItem)
        })
      }, [])

    return(
        <main>
            <LogForm />
            <MainDisplay Logs={listItem}/>
        </main>
    )
}

export default MainPage