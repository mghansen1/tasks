import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(parseInt(event.target.value) || 0);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="attempts box">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateAttempts}
                ></Form.Control>
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={attempts < 1}
                >
                    use
                </Button>
                attempts left: {attempts}
                <Button
                    onClick={() => setAttempts(attempts + requestedAttempts)}
                >
                    gain
                </Button>
            </Form.Group>
        </div>
    );
}
