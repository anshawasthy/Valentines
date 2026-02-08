import Background from "../components/Background";
import React, { useState, useEffect } from 'react'
import Card from '../components/Card.jsx'
import Letter from "../components/Letter.jsx";
import ChoiceGrid from "../components/ChoiceGrid.jsx";
import ChoiceGrid2 from "../components/ChoiceGrid2.jsx";
import Game from "../components/Game.jsx"


const Home = () => {
    const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("darkBody", darkTheme);
  }, [darkTheme]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Background/>
      <Card />
      <Letter />
      <ChoiceGrid setDarkTheme={setDarkTheme}/>
      <ChoiceGrid2 setDarkTheme={setDarkTheme} />
      <Game />
    </div>
  )
}

export default Home
