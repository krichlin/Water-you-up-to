import React, {useState, useEffect} from 'react'
import Select from 'react-select'

function LogForm() {

  const [drinks, setDrinks] = useState([])
  const [drinkOptions, setDrinkOptions] = useState([])
  const date = new Date()
  const month = date.getMonth()+1
  const year = date.getFullYear()
  const day = date.getDate()
  const showDateTime = month + '/' + day + '/' + year + ' ' 
  + date.getHours() + ':' + date.getMinutes()
  let logData = {}
  console.log(drinks);
  console.log(setDrinks);

  useEffect(() => {
    fetch('https://json-server-template-tiiu.onrender.com/drinks')
    .then((res) => res.json())
    .then((data) => {
      //console.log(data)
      //setDrinks(data)
      const options = data.map((value) => {
        return ({
          key: value.id,
          value: value.point,
          label: value.name
        })
        //console.log(drinkOptions)
      })
      setDrinkOptions(options);
    })
  }, [])

  function handleEvent(e) {
    const {
      value, label} = e
    const newObject = {
      "name": label,
      "points": value,
      "date": showDateTime
    }
    //console.log(newObject)
    logData = {...newObject}
    //console.log(logData)
  }

  function saveLog(e) {

    // e.preventDefault();

    fetch('https://json-server-template-tiiu.onrender.com/Logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(logData)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  return (
    <div className='row'>
      <form onSubmit={(e) => saveLog(e)}>
        <h4 style={{ marginTop: '20px' }}>Log your drink!</h4>
        <Select options={drinkOptions} onChange={(e) => handleEvent(e)}/>
        <p>CURRENT DATE: {showDateTime}</p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default LogForm