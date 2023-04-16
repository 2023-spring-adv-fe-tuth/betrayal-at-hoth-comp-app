import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./Home";
import { Setup } from "./Setup";
import { Results } from "./Results";
import { HashRouter, Routes, Route } from "react-router-dom";
import { GameResult, winnerRecord } from './data-models';
import { useState, useEffect} from 'react';

const standInGameResults: GameResult[] = [
  {
    start: "",
    end: "",
    players: 4,
    winner: "Explorers"
  }, 
  {
    start: "",
    end: "",
    players: 3,
    winner: "Haunt"
  }, 
  {
    start: "",
    end: "",
    players: 6,
    winner: "Explorers"
  }, 
  {
    start: "",
    end: "",
    players: 5,
    winner: "Haunt"
  }];

function App() {

  const [gameResults, setGameResults] = useState(standInGameResults);
  console.log(gameResults);

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home 
          winnerRecord={winnerRecord(gameResults)}
          />}/>
          <Route path='/setup' element={<Setup/>}/>
          <Route path='/results' element={<Results/>}/>
        </Routes>
      </HashRouter>    
    </div>
  );
}

export default App;
