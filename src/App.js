import { useEffect, useState } from "react";
import PlayerCard from "./components/PlayerCard";
import { PauseIcon, PlayIcon } from "@heroicons/react/solid";

const App = () => {
  const [startTimer, setStartTimer] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const choices = ["rock", "paper", "scissors"];
  const [timeLeft, setTimeLeft] = useState(5);
  const [pause, setPause] = useState(false);

  const handlePauseToggle = () => {
    setPause(!pause);
  };

  const handleClick = (value) => {
    setStartTimer(true);
    setUserChoice(value);
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const clearGame = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
    setTimeLeft(5);
    setPause(false);
  };

  useEffect(() => {
    {
      // match user choices using a switch statement
      switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
          setResult("YOU WIN!");
          setTimeout(() => {
            clearGame();
          }, 3000);
          break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
          setResult("YOU LOSE!");
          setTimeout(() => {
            clearGame();
          }, 3000);
          break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
          setResult("ITS A DRAW!");
          setTimeout(() => {
            clearGame();
          }, 3000);
          break;
      }
    }
  }, [computerChoice]);

  useEffect(() => {
    if (timeLeft === 0) {
      generateComputerChoice();

      setResult("");
      setTimeLeft(null);

      // handle case where user inputs no choice
      if (userChoice === null) {
        setResult("No Choice Made! You Lose");
        //restart the game
        setTimeout(() => {
          clearGame();
        }, 3000);
      }
    }

    // exit early when we reach 0
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      if (!pause) {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        }
      }
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [timeLeft, startGame, startTimer, pause]);

  if (!startGame) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className=" text-2xl my-8">Ready Player One?</h1>

        <button
          onClick={() => {
            setStartGame(true);
          }}
          type="button"
          className="inline-flex items-center p-5 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          START
        </button>
      </div>
    );
  }

  return (
    <div className=" flex  flex-col h-screen justify-center items-center">
      {/* timer card */}

      <div>{timeLeft}</div>

      {/* player cards here */}
      <div className="flex  ">
        <PlayerCard name={"player"} choice={userChoice} />
        <PlayerCard name={"CPU"} choice={computerChoice} />
      </div>

      {result == null ? (
        <div>
          {pause ? (
            <button onClick={handlePauseToggle}>
              <PlayIcon className="h-10 m-5" />
            </button>
          ) : (
            <button onClick={handlePauseToggle}>
              <PauseIcon className="h-10 m-5" />
            </button>
          )}
        </div>
      ) : (
        <h1 className=" py-10">{result}</h1>
      )}

      <div>
        {choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => {
              handleClick(choice);
              // setTimeLeft(5);
            }}
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-5"
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
