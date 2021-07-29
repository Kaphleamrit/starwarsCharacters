import {  } from "bootstrap";
import React from "react";
import { Badge, Card, Container, Row } from "react-bootstrap";



const MyCard = ({person, setActivePage, setId, id}) => {

        return (
          <Container>
            <Row>
            <Card
              style = {{
                boxShadow: "2px 2px 4px #999999",
                padding: '20px'
              }}
          >
              <Card.Text 
              className = 'link-primary'
              onClick = {() => {
                setActivePage("personDetails");
                setId(id);
              }}
              style={{ 
                fontWeight: "600",
                 cursor: "pointer",
                  textDecoration: 'underline',
                   fontSize: '1.3rem',
                   display: 'inline-block'
                   }}>
                {person.name}</Card.Text>
  
              <Card.Text className="text-muted">{person.birth_year}</Card.Text>
              <Badge
                style={{
                  width: "6rem",
                  position: "absolute",
                  right: "15px",
                  top: "30px",
                  padding: "8px",
                }}
                pill
                bg="secondary"
              >  
                {person.gender}
              </Badge>
            </Card>
            </Row>
            </Container>
        );
}
export default MyCard;