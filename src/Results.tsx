import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const Results = () => {

    const nav = useNavigate();

    return (
        <>
            <h1>Who Won?</h1>
            <Button variant="success" onClick={() => nav("/")}>Explorers</Button>
            <Button variant="danger" onClick={() => nav("/")}>Haunt</Button>
        </>
    );
};