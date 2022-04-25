import { Button, Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store/redux";


const Home: React.FC = () => {
  const res = useSelector((state: RootState) => state.info);

  return (
    <div>
    
        <Row xs={1} md={3} className="g-4">
          {res.info.map((item: any) => (
            <Col>
              <Card style={{ height: "100%" }} key={item.publishedAt}>
                <Card.Title className="m-5">
                  <h1>{item.title}</h1>
                </Card.Title>
                <Card.Img variant="top" src={item.urlToImage} />
                <Card.Body>
                  <Card.Text>{item.content}</Card.Text>
                  <Button variant="primary" href={item.url}>
                    Lien de l'article
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
     
    </div>
  );
};

export default Home;
