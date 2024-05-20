import { useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  




  const  [data,setData] = useState({})
  const [location, setLocation] = useState('')


  const searchLocation = (event) =>{
    if(event.key === 'Enter'){
      axios.get(url).then((response) =>{
        setData(response.data)
      console.log(response.data)
    }
  )
  setLocation('')
}



}
searchLocation('');

  console.log(location)


 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=098fb39284e159eeea3958419b687caa`


  return (
    <>
    <div className="maincontainer">
      <div className="searchbar">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter the location'
        type="text" /> 
        <img src="search.png" alt="search" />
      </div>

      {data.name != undefined &&
      
      <div className="subcontainer">
      <div className="itemcon1">
       <div>
       <h2><img src="lox.png" alt="" />{data.name}</h2>
        {data.main ? <h1>{data.main.temp}°C</h1> : null}
       </div>

       <div>
       <span className='icon-con'>
          <div className='icon'><img src={`icons/${data.weather[0].icon}.png`} alt="Weather icon" /></div>
           <p className='descrip'>{data.weather[0].description}</p>
        </span>
       </div>
        
      </div>

      <div className="itemcon2">
        <span className="subitem1 humi">
          <p>Humidity 💧</p>
        {data.main ?<p>{data.main.humidity}</p>: null}
        </span>
        <span className="subitem1 wind">
          <p>Wind 🌀</p>
          {data.wind ? <p>{data.wind.speed}</p>:null}
          </span>
        <span className="subitem1 gust">
          <p>Gust 💨</p>
          {data.wind ? <p>{data.wind.gust}</p>:null}
        </span>
      </div>
      </div>
    
      
      }
     </div>
    
    </>
  )
}

export default App
