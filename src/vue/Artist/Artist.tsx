import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import {FormArtist} from "../../components";

interface Iartist {
  item: [];
  idArtist: string;
  strArtist: string;
  strArtistBanner: string;
  strStyle: string;
  intMembers: string;
  strGenre: string;
  strBiographyFR: string;
  strArtistCutout: string;
  strArtistFanart: string;
  strArtistFanart1: string;
  strArtistFanart2: string;
  strArtistFanart3: string;
  strArtistFanart4: string;
  strArtistClearart: string;
}

const Artist: React.FC = () => {
  const [artist, setArtist] = useState<[]>([]);
  const [input, setInput] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${input}`)
      .then((res) => res.json())
      .then((result) => {
        setArtist(result.artists);
        
      });
      setInput('')
  };
  if (artist !== null) {
    return (
      <div>
        <FormArtist
          input={input}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
        {artist.map((item: Iartist) => (
          <div className="artist-info mb-5" key={item.idArtist}>
            <Card className="text-center">
              <Card.Header>{item.strArtist}</Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={item.strArtistBanner} />
                <Card.Title>Style: {item.strStyle}</Card.Title>
                <Card.Text>
                  Nombre de presonne dans le group: {item.intMembers}
                </Card.Text>
                <Card.Text>Genre: {item.strGenre}</Card.Text>
                <Card.Text>{item.strBiographyFR}</Card.Text>
                <Row>
                  <Col>
                    <Card.Img variant="top" src={item.strArtistCutout} />
                  </Col>
                  <Col>
                    <Card.Img variant="top" src={item.strArtistFanart} />
                  </Col>
                  <Card.Img variant="top" src={item.strArtistClearart} />
                  <Col>
                    <Card.Img variant="top" src={item.strArtistFanart2} />
                  </Col>
                  <Col>
                    <Card.Img variant="top" src={item.strArtistFanart3} />
                  </Col>
                  <Col>
                    <Card.Img variant="top" src={item.strArtistFanart4} />
                  </Col>
                </Row>
                <Button variant="primary" className="mt-4">
                  Go somewhere
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <FormArtist
          input={input}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
        <h1 className="text-center">Nous n'avons pas trouver votre artist désoler</h1>
      </div>
    );
  }
};

export default Artist;
