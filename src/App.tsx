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
    start: "2023-04-15T20:32:40.556Z",
    end: "2023-04-15T22:12:40.253Z",
    players: 4,
    winner: "Explorers"
  }, 
  {
    start: "2023-04-15T22:32:22.687Z",
    end: "2023-04-15T23:50:52.149Z",
    players: 3,
    winner: "Haunt"
  }, 
  {
    start: "2023-04-15T10:11:50.076Z",
    end: "2023-04-15T11:35:44.123Z",
    players: 6,
    winner: "Explorers"
  }, 
  {
    start: "2023-04-15T14:05:21.354Z",
    end: "2023-04-15T16:56:42.424",
    players: 5,
    winner: "Haunt"
  }];

function App() {

  const [gameResults, setGameResults] = useState(standInGameResults);
  //console.log(gameResults);

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
