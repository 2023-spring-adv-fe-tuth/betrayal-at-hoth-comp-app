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

export const Home: React.FC<HomeProps> = ({ winnerRecord, longestGame, shortestGame }) => {

    const nav = useNavigate();

    return (
            <>
                <div>
                    <Button className="mb-3" variant="success" onClick={() => nav("/setup")}>Play</Button>
                    <Card className="mb-3">
                        <Card.Header>Game History</Card.Header>
                        <Card.Body>
                            <ListGroup>
                                {winnerRecord.map((x, index) => 
                                <ListGroup.Item variant={cssColor(x.winner)} key={index}>{x.winner} Players: {x.players}</ListGroup.Item>)}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Game Length</Card.Header>
                        <Card.Body>
                            <p className="mb-1">{`Longest Game: ${formatDate(longestGame)}`}</p>
                            <p className="mb-1">{`Shortest Game: ${formatDate(shortestGame)}`}</p>
                            <ListGroup>
                                {}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>
            </>
    );
};