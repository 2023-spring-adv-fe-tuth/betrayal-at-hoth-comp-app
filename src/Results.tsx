import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameResult, SetupData } from "./data-models";

interface ResultsProps {
    addGameResult: (r: GameResult) => void;
    setupData: SetupData;
}

export const Results: React.FC<ResultsProps> = ({ addGameResult, setupData }) => {

    const nav = useNavigate();

    const gameOver = (winner: string) => {

        const newResult = {
            start: setupData.start,
            end: new Date().toISOString(),
            players: setupData.players,
            winner: winner
        };

        addGameResult(newResult);

        nav(-2);
    };

    return (
        <div className="container text-center">
            <div className="row">
                <h1>Who Won?</h1>
            </div>
            <div className="row justify-content-around">
                <div className="col-4">
                    <Button variant="success" value="Explorers" 
                    onClick={e => gameOver((e.target as HTMLButtonElement).value)}>Explorers</Button>
                </div>
                <div className="col-4">
                    <Button variant="danger" value="Haunt" 
                    onClick={e => gameOver((e.target as HTMLButtonElement).value)}>Haunt</Button>
                </div>
            </div>
        </div>
    );
};