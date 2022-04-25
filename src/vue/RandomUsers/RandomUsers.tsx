import React from "react";
import { Card, Container } from "react-bootstrap";

interface usersInterface {
  items: []
}

interface nameInterface {
    first: string
    last: string
    large: string
    age: number
    city: string
    country: string
}

interface Iitem {
  cell: string;
  email: string;
  phone: string;
  name: nameInterface;
  picture:nameInterface;
  dob:nameInterface
  location:nameInterface
}


const RandomUsers: React.FC<usersInterface> = (props) => {
  console.log(props);

  return (
    <div>
      <Container>
        {props.items.map((item: Iitem) => (
          <Card style={{ width: "20%" }} key={item.cell ? item.cell : "0"}>
            <p className="m-3 text-center">
              {item.name.first ? item.name.first : "NaN"}{" "}
              {item.name.last ? item.name.last : "NaN"}
            </p>
            <Card.Img
              variant="top"
              src={item.picture.large ? item.picture.large : "NaN"}
            />
            <Card.Body>
              <Card.Text>Email : {item.email ? item.email : "NaN"}</Card.Text>
              <Card.Text>
                Age : {item.dob.age ? item.dob.age : "NaN"} ans
              </Card.Text>
              <Card.Text>
                Ville : {item.location.city ? item.location.city : "NaN"}
              </Card.Text>
              <Card.Text>
                Paye : {item.location.country ? item.location.country : "NaN"}
              </Card.Text>
              <Card.Text>Phone : {item.phone ? item.phone : "NaN"}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default RandomUsers;
