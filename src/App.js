import "./App.css";
// import {
//   Heading,
//   Img,
//   SimpleGrid,
//   Box,
//   Text,
//   Input,
//   Button,
// } from "@chakra-ui/react";
import Description from "./components/Description";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherServices";
import cloud from './assets/cloudy.jpg'
function App() {
const [weather,setWeather] = useState(null)
const [units,setUnits] = useState("metric")
const [city, setCity] = useState('paris')
// const [bg, setBg] = useState('hotBg')
useEffect(()=>{
  const fetchWeatherData = async () =>{
    const data = await getFormattedWeatherData(city,units)
    setWeather(data)

    // const threshold = units === 'metric' ? 20 :60;
    // if(data.temp <=  threshold) setBg(coldbg)
    // else setBg(hotbg)
  }
  fetchWeatherData()
},[units,city])

const handleClick = (e) =>{
const button = e.currentTarget
console.log(button)
const currentUnit = button.innerText.slice(1)
const isCelsius = currentUnit ? "°F" : "°C"
setUnits(isCelsius ? "metric": "imperial")
}

const enterKeyPressed = (e) => {
  if(e.keyCode ===13){
    setCity(e.currentTarget.value)
  }
}

  return (
    <div className="App " style={{backgroundImage:`url(${cloud})`}}>
      <div className="overlay">{
        weather && (
          <div className="container">
          <div className="section section__inputs">
            <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter City Name" />
            <button onClick={(e)=>handleClick(e)}>°F</button>
          </div>
          <div className="section section_temperature">
            <div className="icon">
              <h3>{`${weather.name},${weather.country}`}</h3>
              <img src={`${weather.iconURL}`}alt="weatherIcon" />
              <p>{`${weather.description}`}</p>
            </div>
            <div className="temperature">
              <h1>{`${weather.temp.toFixed()} °${units === 'metric' ? "C" : "F"}`}</h1>
            </div>
          </div>



          {/* jkhjkujh */}
          <Description weather={weather} units={units}/>
        </div>
        )
      }
       
      </div>
    </div>
  );
}

export default App;
