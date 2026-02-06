import './App.css'

import { useState, type ChangeEvent } from 'react';

import questions from "./data/questions.json";

import { Main } from "./components/Main";
import { Intro } from "./components/Intro";
import { Button } from "./components/Button";
import { DisplayQuestion } from './components/DisplayQuestion';
import { DisplayResult } from "./components/DisplayResult";
import { DisplayWarning } from './components/DisplayWarning';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(-1);
  const [currentScore, setCurrentScore] = useState<number>(-1);
  const [maxScore, setMaxScore] = useState<number>(-1);
  const [showWarning, setShowWarning] = useState<boolean>(false);

  const handleClick = () => {
    if (currentScore < 0 && currentQuestion > -1 && currentQuestion < questions.question.length) {
      setShowWarning(true);
      return;
    }


    if (currentQuestion < questions.question.length) {
      setCurrentQuestion(currentQuestion + 1);

      if (currentScore > maxScore) {
        setMaxScore(currentScore);
      }

      if (currentScore === 4) {
        setCurrentQuestion(questions.question.length);
      }

      setCurrentScore(-1);

    } else {
      resetStates();
    }
  }

  function resetStates() {
    setCurrentQuestion(-1);
    setCurrentScore(-1);
    setMaxScore(-1);
  }

  const handleSelection = (event: ChangeEvent<HTMLInputElement>) => {
    if (showWarning) {
      setShowWarning(false);
    }
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
        <DisplayWarning show={showWarning} />
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
