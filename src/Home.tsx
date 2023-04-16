import { ListGroupItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

import { useNavigate } from "react-router-dom";


interface HomeProps {
    winnerRecord: string[]
};

const cssColor = (x: string) => {
    let className = "";

    if (x === "Explorers") {
        className = "success"
    } else {
        className = "danger"
    }
    return className;
};

export const Home: React.FC<HomeProps> = ({ winnerRecord }) => {

    const nav = useNavigate();

    return (
            <div className=" d-flex align-items-center justify-content-center">
                <div>
                    <h1>Welcome to Betrayal at House on the Hill</h1>
                    <Button onClick={() => nav("/setup")}>Play</Button>
                    <Card >
                        <Card.Header>Winner History</Card.Header>
                        <Card.Body>
                            <ListGroup>
                            {winnerRecord.map(x => <ListGroup.Item variant={cssColor(x)}>{x}</ListGroup.Item>)}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Game Length</Card.Header>
                        <Card.Body>Placeholder for last game length in minutes</Card.Body>
                    </Card>
                </div>
            </div>
    );
};