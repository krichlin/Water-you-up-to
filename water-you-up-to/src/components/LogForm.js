import React, {useState, useEffect} from 'react'
import Select from 'react-select'



function LogForm() {
  const [drinks, setDrinks] = useState([])
  const drinkOptions = []
  const date = new Date()
  const month = date.getMonth()+1
  const year = date.getFullYear()
  const day = date.getDate()
  const showDateTime = month + '/' + day + '/' + year + ' ' 
  + date.getHours() + ':' + date.getMinutes()

  useEffect(() => {
    fetch('http://localhost:6001/drinks')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      //setDrinks(data)
      data.forEach((value) => {
        drinkOptions.push({
          key: value.id,
          value: value.point,
          label: value.name
        })
        //console.log(drinkOptions)
      })
    })
  }, [])


  return (
    <div className='row'>
      <form>
        <h4>Log your drink!</h4>
        <Select options={drinkOptions} onChange={(e) => console.log(e)}/>
        <p>CURRENT DATE: {showDateTime}</p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default LogForm