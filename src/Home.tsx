import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import { durationFormatter } from "human-readable";

import { useNavigate } from "react-router-dom";


interface HomeProps {
    winnerRecord: {
        winner: string;
        players: number;
    }[];
    longestGame: number;
    shortestGame: number;
    avgGameLengths: {players: number, avgTime: number}[];
};

const formatDate = durationFormatter();

const cssColor = (x: string) => {
    let className = "";

    if (x === "Explorers") {
        className = "success"
    } else {
        className = "danger"
    }
    return className;
};

export const Home: React.FC<HomeProps> = ({ winnerRecord, longestGame, shortestGame, avgGameLengths }) => {

    const nav = useNavigate();

    return (
            <>
                <div>
                    <Button className="mb-3" variant="success" onClick={() => nav("/setup")}>Setup</Button>
                    <Card className="mb-3">
                        <Card.Header>Game History</Card.Header>
                        <Card.Body>{winnerRecord.length > 0 ?
                            (<ListGroup>
                                {winnerRecord.map((x, index) => 
                                <ListGroup.Item variant={cssColor(x.winner)} key={index}>Winning Side: {x.winner}   Players: {x.players}</ListGroup.Item>)}
                            </ListGroup>) :
                            (<p>No game history</p>)
                            }
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Game Length</Card.Header>
                        <Card.Body>
                            <p className="mb-1">{`Longest Game: ${Number.isInteger(longestGame) ? formatDate(longestGame) : "No games played"}`}</p>
                            <p className="mb-1">{`Shortest Game: ${Number.isInteger(shortestGame) ? formatDate(shortestGame) : "No games played"}`}</p>
                            <ListGroup>{avgGameLengths.length > 0 ?
                            (<ListGroup>
                                {avgGameLengths.map((x, index) => 
                                <ListGroup.Item key={index}>Players: {x.players} Average Game Length: {`${formatDate(x.avgTime)}`}</ListGroup.Item>)}
                            </ListGroup>) :
                            (<p>No game history</p>)
                            }
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>
            </>
    );
};