import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const nav = useNavigate();

    return (
        <>
            <div className=" d-flex align-items-center justify-content-center">
                <div>
                    <h1>Welcome to Betrayal at House on the Hill</h1>
                    <Button onClick={() => nav("/setup")}>Play</Button>
                    <Card >
                        <Card.Header>Winner History</Card.Header>
                        <Card.Body>Placeholder for goodguys/badguys win records</Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Game Length</Card.Header>
                        <Card.Body>Placeholder for last game length in minutes</Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
};