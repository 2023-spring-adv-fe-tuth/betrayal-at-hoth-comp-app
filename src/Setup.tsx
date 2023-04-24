import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SetupData } from "./data-models";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const radios = [
    { name: "Three", value: 3},
    { name: "Four", value: 4},
    { name: "Five", value: 5},
    { name: "Six", value: 6}
];

interface SetupProps {
    setSetupData: (info: SetupData) => void;
};

export const Setup: React.FC<SetupProps> = ({ setSetupData }) => {

    const nav = useNavigate();
    const [numberOfPlayers, setNumberOfPlayers] = useState(3);

    const startGame = () => {
        setSetupData({
            start: new Date().toISOString(),
            players: numberOfPlayers
        });
        
        nav("/results");
    };

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div>
                <h1>Setup</h1>
                <h2>Please select the number of players:</h2>
                <Form className="mb-3">
                    {radios.map((radio, index) => (
                        <Form.Check type='radio'
                        name='radios'
                        id={radio.name}
                        label={radio.name}
                        value={radio.value}
                        key={index}
                        onChange={e => setNumberOfPlayers(Number(e.target.value))}/>
                    ))}
                </Form>
                <Button onClick={startGame}>Start</Button>
            </div>
        </div>
    );
};