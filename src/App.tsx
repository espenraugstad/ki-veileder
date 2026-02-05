import './App.css'

import { Main } from "./components/Main";
import { Intro } from "./components/Intro";
import { Button } from "./components/Button";

function App() {

  const handleClick = () => {
    console.log("Hi");
  }

  return (
    <Main>
      <Intro />
      <Button clickhandler={handleClick} text="Start veilderen" />
    </Main>
  )
}

export default App
