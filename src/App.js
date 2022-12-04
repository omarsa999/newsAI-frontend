import React, { useState, useEffect } from "react"
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import { useDispatch } from "react-redux"
import PulseLoader from "react-spinners/ClipLoader"

import Posts from "./components/Posts/Posts"
import Form from "./components/Form/Form"
import { getPosts } from "./actions/posts"
import useStyles from "./styles"

import HeadLine from "./components/Headline/Headline"
// import Weather from "./components/Weather/Weather"
import moment from "moment"
import SkalitonComp from "./components/SkalitonComp/SkalitonComp"

const App = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const classes = useStyles()

  const [isLoading, setIsloading] = useState(true)
  useEffect(() => {
    setIsloading(false)
  }, [])

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  const datea = moment().format("llll")

  // if (isLoading) return <Loading />

  return (
    <div>
      <div class="head">
        <div class="headerobjectswrapper">
          {/* <Weather /> */}
          {/* <div class="weatherforcastbox">
            <span>
              Weatherforcast for the next 24 hours: Plenty of Sunshine
            </span>
            <br />
            <span>Wind: 7km/h SSE; Ther: 21°C; Hum: 82%</span>
          </div> */}
          <header>News-AI: Israel</header>
        </div>

        <div class="subhead">
          {datea}
          {/* Thursday */}
          {/* August 30, 1978  */}
        </div>
      </div>

      <HeadLine />
    </div>
  )
}

export default App
