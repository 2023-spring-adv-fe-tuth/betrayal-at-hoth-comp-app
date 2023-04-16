import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export const Results = () => {

    const nav = useNavigate();

    return (
        <div className="container text-center">
            <div className="row">
                <h1>Who Won?</h1>
            </div>
            <div className="row justify-content-around">
                <div className="col-4">
                    <Button variant="success" onClick={() => nav("/")}>Explorers</Button>
                </div>
                <div className="col-4">
                    <Button variant="danger" onClick={() => nav("/")}>Haunt</Button>
                </div>
            </div>
        </div>
    );
};