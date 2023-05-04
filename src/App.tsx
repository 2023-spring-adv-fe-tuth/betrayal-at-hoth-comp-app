import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./Home";
import { Setup } from "./Setup";
import { Results } from "./Results";
import { HashRouter, Routes, Route } from "react-router-dom";
import { GameResult, winnerRecord, getShortestGame, getLongestGame, SetupData } from './data-models';
import { useState, useEffect} from 'react';
import { saveGameToCloud, loadGamesFromCloud } from './tca-cloud-api';

import localforage from "localforage";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

interface UserInfo {
  userName: string;
  userNumber: number;
}

const defaultUserInfo = {
  userName: "",
  userNumber: Math.floor(Math.random() * (100 - 1 + 1) + 1)
};

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
    end: "2023-04-15T16:56:42.424Z",
    players: 5,
    winner: "Haunt"
  }];


function App() {

  // Managing state
  const [userInfo, setUserInfo] = useState<UserInfo>(defaultUserInfo);

  const [gameResults, setGameResults] = useState<GameResult[]>([]);
  
  const [setupData, setSetupData] = useState<SetupData>({
    start: "",
    players: 0
  });

  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState(defaultUserInfo.userNumber);

  //Helper functions
  const addGameResult = async(result: GameResult) => {
    //Save to cloud
    await saveGameToCloud(
      `${userInfo.userName}~${userInfo.userNumber}`, 
      "HOTH-Companion-App",
      result.end,
      result
    );

    setGameResults([ ...gameResults, result]);
  }; 

  const saveUserInfo = async() => {
    if (userName.length === 0) {
      return;
    };
      
    const user = await localforage.setItem( "userInfo",
        {...userInfo,
          userName: userName,
          userNumber: userNumber
        }
      );

    setUserInfo(user);
  };

  useEffect(() => {
    const loadUserInfo = async() => {
      const user = await localforage.getItem<UserInfo>("userInfo");
      if (user && user.userName.length > 0) {
        const gameResults = await loadGamesFromCloud(
          `${user.userName}~${user.userNumber}`,
          "HOTH-Companion-App"
        );

        if (!ignore) {
          setGameResults(gameResults)
        };
      };

      if (!ignore) {
        setUserInfo(user ?? defaultUserInfo);
      };
    };

    let ignore = false;
    loadUserInfo();
    return () => {
      ignore = true;
    };
  }, [userInfo.userName, userInfo.userNumber]
  );

  return (
    <div className="container p-3 bg-secondary bg-opacity-50">
      <div className="text-center">
        <h1>Welcome to Betrayal at House on the Hill</h1>
      </div>
      <div className="my-3">
        <p className="fw-light">Enter a username then pick a number between 1 - 100 to help ensure uniqeness.</p>
        <InputGroup>
          <Button variant="primary" onClick={saveUserInfo}>Submit</Button>
          <Form.Control type="text" placeholder="Username@email.com" aria-label="Username" aria-describedby="username"
           value={userName} onChange={(e) => setUserName(e.target.value)}/>
           <Form.Control type="text" placeholder="1 - 100" aria-label="Number" aria-describedby="username"
           value={userNumber} onChange={(e) => setUserNumber(Number(e.target.value))}/>
        </InputGroup>
      </div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home
          winnerRecord={winnerRecord(gameResults)}
          longestGame={getLongestGame(gameResults)}
          shortestGame={getShortestGame(gameResults)}
          //averageGameDuration={getAverageGameDurationByPlayerCount(gameResults)}
          />}/>
          <Route path='/setup' element={<Setup
          setSetupData={setSetupData}/>}/>
          <Route path='/results' element={<Results
          addGameResult={addGameResult}
          setupData={setupData}/>}/>
        </Routes>
      </HashRouter>    
    </div>
  );
}

export default App;
