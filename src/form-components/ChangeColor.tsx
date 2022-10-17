import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((colorkey: string) => (
                <>
                    <Form.Check
                        inline
                        type="radio"
                        id="radiobutton"
                        label={colorkey}
                        value={colorkey}
                        checked={colorkey === color}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setColor(event.target.value)}
                    ></Form.Check>
                </>
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                You have chosen {color}
            </div>
        </div>
    );
}
