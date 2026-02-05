import './App.css'

import { useState, type ChangeEvent } from 'react';

import questions from "./data/questions.json";

import { Main } from "./components/Main";
import { Intro } from "./components/Intro";
import { Button } from "./components/Button";
import { DisplayQuestion } from './components/DisplayQuestion';

function App() {
  // State to handle question to display
  const [currentQuestion, setCurrentQuestion] = useState<number>(-1); // -1 means show intro page

  const handleClick = () => {
    if (currentQuestion < questions.question.length) {
      // Increment question
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // currentQuestion === questions.question.lenght => Must be on result page
      setCurrentQuestion(-1);
    }

  }

  const handleSelection = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);
  }

  if (currentQuestion === -1) {
    return (
      <Main>
        <Intro />
        <Button clickhandler={handleClick} text="Start veilderen" />
      </Main>
    )
  } else if (currentQuestion < questions.question.length) {
    return (
      <Main>
        <DisplayQuestion question={questions.question[currentQuestion]} handleSelection={handleSelection}/>
        <Button clickhandler={handleClick} text="Neste" />
      </Main>

    )
  } else {
    return (
      <Main>
        <p>Your results are</p>
        <Button clickhandler={handleClick} text="Start på nytt" />
      </Main>

    )
  }

}

export default App
