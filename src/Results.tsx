import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { GameResult } from "./data-models";

interface ResultsProps {
    addGameResult: (r: GameResult) => void;
}

export const Results: React.FC<ResultsProps> = ( addGameResult ) => {

    const nav = useNavigate();

    return (
        <div className="container text-center">
            <div className="row">
                <h1>Who Won?</h1>
            </div>
            <div className="row justify-content-around">
                <div className="col-4">
                    <Button variant="success" value="Explorers" onClick={() => nav("/")}>Explorers</Button>
                </div>
                <div className="col-4">
                    <Button variant="danger" value="Haunt" onClick={() => nav("/")}>Haunt</Button>
                </div>
            </div>
        </div>
    );
};