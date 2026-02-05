import './App.css'

import { useState, type ChangeEvent } from 'react';

import questions from "./data/questions.json";

import { Main } from "./components/Main";
import { Intro } from "./components/Intro";
import { Button } from "./components/Button";
import { DisplayQuestion } from './components/DisplayQuestion';
import { DisplayResult } from "./components/DisplayResult";

function App() {
  // State to handle question to display
  const [currentQuestion, setCurrentQuestion] = useState<number>(-1); // -1 means show intro page

  // State to track the score from the current question
  const [currentScore, setCurrentScore] = useState<number>(-1);

  // State to keep track of the maximum score from any question
  const [maxScore, setMaxScore] = useState<number>(-1);

  const handleClick = () => {
    if (currentQuestion < questions.question.length) {
      // Increment question
      setCurrentQuestion(currentQuestion + 1);

      // Update max score
      if (currentScore > maxScore) {
        setMaxScore(currentScore);
      }

      // Check if current score is 4, then the guide is finished
      if (currentScore === 4) {
        setCurrentQuestion(questions.question.length);
      }

    } else {
      // currentQuestion === questions.question.lenght => Must be on result page
      resetStates();
    }

  }

  function resetStates() {
    setCurrentQuestion(-1);
    setCurrentScore(-1);
    setMaxScore(-1);
  }

  const handleSelection = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentScore(parseInt(event.target.value));
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
        <DisplayQuestion question={questions.question[currentQuestion]} handleSelection={handleSelection} />
        <Button clickhandler={handleClick} text="Neste" />
      </Main>

    )
  } else {
    return (
      <Main>
        <DisplayResult score={maxScore} />
        <Button clickhandler={handleClick} text="Start på nytt" />
      </Main>

    )
  }

}

export default App
