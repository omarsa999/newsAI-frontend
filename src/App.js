import React, { useState, useEffect } from "react"
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import { useDispatch } from "react-redux"
import PulseLoader from "react-spinners/ClipLoader"

import Posts from "./components/Posts/Posts"
import Form from "./components/Form/Form"
import { getPosts } from "./actions/posts"
import useStyles from "./styles"

import HeadLine from "./components/Headline/Headline"
import Weather from "./components/Weather/Weather"
import moment from "moment"

const App = () => {
  const [currentId, setCurrentId] = useState(0)
  const dispatch = useDispatch()
  const classes = useStyles()

  const [isLoading, setIsloading] = useState(false)
  useEffect(() => {
    setIsloading(true)
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
          <Weather />
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

      {!isLoading ? (
        <PulseLoader
          color="#d63636"
          margin={5}
          size={30}
          speedMultiplier={1.5}
        />
      ) : (
        <div class="collumns">
          <div>
            <HeadLine />
          </div>
        </div>
      )}

      {/* <div class="collumn">
          <div class="head">
            <span class="headline hl3">When darkness overspreads my eyes</span>
            <p>
              <span class="headline hl4">by JOHANN WOLFGANG VON GOETHE</span>
            </p>
          </div>
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the upper surface of the impenetrable foliage of
          my trees, and but a few stray gleams steal into the inner sanctuary, I
          throw myself down among the tall grass by the trickling stream;
          <p>
            and, as I lie close to the earth, a thousand unknown plants are
            noticed by me: when I hear the buzz of the little world among the
            stalks, and grow familiar with the countless indescribable forms of
            the insects and flies, then I feel the presence of the Almighty, who
            formed us in his own image, and the breath of that universal love
            which bears and sustains us, as it floats around us in an eternity
            of bliss; and then, my friend, when darkness overspreads my eyes,
            and heaven and earth seem to dwell in my soul and absorb its power,
            like the form of a beloved mistress, then I often think with
            longing, Oh, would I could describe these conceptions, could impress
            upon paper all that is living so full and warm within me, that it
            might be the mirror of my soul, as my soul is the mirror of the
            infinite God!
          </p>
        </div> */}
    </div>

    // the old version
    // <Container maxWidth="lg">
    //   <AppBar className={classes.appBar} position="static" color="inherit">
    //     <Typography className={classes.heading} variant="h2" align="center">
    //       NewsAI
    //     </Typography>
    //     {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
    //   </AppBar>
    //   <Grow in>
    //     <Container>
    //       <Grid
    //         container
    //         justify="space-between"
    //         alignItems="stretch"
    //         spacing={0}
    //       >
    //         <Grid item xs={12} sm={12}>
    //           <Posts setCurrentId={setCurrentId} />
    //         </Grid>
    //         {/* <Grid item xs={12} sm={4}> */}
    //         {/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
    //         {/* </Grid> */}
    //       </Grid>
    //     </Container>
    //   </Grow>
    // </Container>
  )
}

export default App
