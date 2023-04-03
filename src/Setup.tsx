import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const radios = [
    { name: "Three", value: 3},
    { name: "Four", value: 4},
    { name: "Five", value: 5},
    { name: "Six", value: 6}
];

export const Setup = () => {

    const nav = useNavigate();

    return (
        <>
            <h1>Setup</h1>
            <h2>Please select the number of players:</h2>
            <Form>
                {radios.map((radio) => (
                    <Form.Check type="radio"
                    id={radio.name}
                    label={radio.value}/>
                ))}
            </Form>
            <Button onClick={() => nav("/results")}>Start</Button>
        </>
    );
};