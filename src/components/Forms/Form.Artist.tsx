import React from "react";
import { Form, Button } from "react-bootstrap";

interface Iartist {
    input:string
    handleSubmit: (event: React.FormEvent) => void
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


const FormArtist: React.FC<Iartist> = (props) => {
  return (
    <div>
      <Form onSubmit={props.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>écrivez le nom d'un Artiste</Form.Label>
          <Form.Control
            type="text"
            value={props.input}
            onChange={props.handleInputChange}
            placeholder="Enter un Artiste"
          />
          <Button variant="primary" type="submit" className="mt-4 w-100">
            rechercher
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormArtist;
