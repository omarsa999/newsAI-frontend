import React from "react"
import { useState, useEffect } from "react"
import "./index.css"
import axios from "axios"

const Weather = () => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: { q: "jerusalem", days: "3" },
    headers: {
      "X-RapidAPI-Key": "85e71fb41amsh6ade5a3c69cddd6p1130f8jsnbfe4477ee31a",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  }

  const [wdata, setWdata] = useState({})
  useEffect(() => {
    const getWeatherFromApiAsync = async () => {
      try {
        const resopnse = await axios.request(options).then((res) => {
          console.log(res)
          setWdata(res.data.current)
          console.log(res.data.current)
        })
      } catch (err) {
        console.log(err)
      }
    }
    getWeatherFromApiAsync()
  }, [])
  // console.log(wdata)
  // const x = weatherData.data.forecast.forecastday[0]

  return (
    <div class="weatherforcastbox">
      {/* <span>Weatherforcast for the next 24 hours: Plenty of Sunshine</span> */}

      {/* <span>IF IT'S NOT HERE, IT'S NOT IMPORTANT</span> */}
      <br />

      <span class="weatherText">
        {wdata?.feelslike_c}° - {wdata?.condition.text}
      </span>
      <span class="weatherText weatherIMG">
        <img src={wdata?.condition.icon} />
      </span>
    </div>
  )
}
export default Weather
