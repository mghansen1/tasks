import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);

    function editing(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    if (editMode) {
        return (
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    inline
                    id="form-switch"
                    type="switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={editing}
                ></Form.Check>
                <Form.Group controlId="Student name">
                    <Form.Control
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Check
                    inline
                    type="checkbox"
                    id="student"
                    label="student"
                    checked={isStudent}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setIsStudent(event.target.checked)
                    }
                ></Form.Check>
                {name} is {isStudent ? "" : "not"} a student
            </div>
        );
    } else {
        return (
            <div>
                <h3>Edit Mode</h3>
                <Form.Check
                    inline
                    id="form-switch"
                    type="switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={editing}
                ></Form.Check>
                {name} is {isStudent ? "" : "not"} a student
            </div>
        );
    }
}
