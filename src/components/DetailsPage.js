import React from "react";
import { Card, Container, Button, Row } from "react-bootstrap";

const DetailsPage = ({ resolvedData, id, setActivePage }) => {
  const personObj = resolvedData.results[id];
  return (
    <Container>
      <Row>
        <Button onClick={() => setActivePage("people")}>back</Button>
        <Card style={{ 
          height: "90vh",
          boxShadow: '2px 2px 4px black',
           }} border="dark">
          <Card.Body
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: 'column',
              fontSize: '1.5rem',
              color: '#bbbbbb'
            }}
          >
            <Card.Title 
            style = {{
              fontSize: '1.8rem',
              color: '#c832db'
            }}
            >Name: {personObj.name}</Card.Title>
            
              <Card.Text>Height: {personObj.height}</Card.Text>
              <Card.Text>Mass: {personObj.mass}</Card.Text>
              <Card.Text>Hair Color: {personObj.hair_color}</Card.Text>
              <Card.Text>Skin Color: {personObj.skin_color}</Card.Text>
              <Card.Text>Eye Color: {personObj.eye_color}</Card.Text>
              <Card.Text>Birth Year: {personObj.birth_year}</Card.Text>
              <Card.Text>Gender: {personObj.gender}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default DetailsPage;
