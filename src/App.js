import { Badge, Button, ButtonGroup, Card, Pagination } from "react-bootstrap";
import "./App.css";
import SearchIcon from "./assets/search.png";
import MenuIcon from "./assets/menu.png";
import { fakeAPI, fakeAPI2 } from "./assets/data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { QueryClientProvider } from "react-query";
import { useState } from "react";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/api/people">
            <MyPagination />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

function MyCard(props) {
  return (
    <Card
      style={{
        width: "22rem",
        boxShadow: "2px 2px 4px #999999",
        padding: "15px",
      }}
    >
      <Card.Title style={{ fontWeight: "600" }}>{props.name}</Card.Title>

      <Card.Text className="text-muted">{props.description}</Card.Text>
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
        {props.pillText}
      </Badge>
    </Card>
  );
}

function SearchBar() {
  return (
    <>
      <ButtonGroup style={{ width: "22rem", boxShadow: "2px 2px 4px #999999" }}>
        <Button>
          <img src={SearchIcon} alt="search icon" />
        </Button>
        <Button id="searchBox" as="input" placeholder="Search Tasks"></Button>
        <Button>
          <img src={MenuIcon} alt="menu icon" />
        </Button>
      </ButtonGroup>
    </>
  );
}

function DescriptionCard() {
  return (
    <Card style={{ width: "18rem" }} bg="info" border="dark">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          <h6>Vehicles</h6>
          <ul>
            <li>Snowspeeder</li>
            <li>Imperial speeder Bike</li>
          </ul>
          <h6>Height: 172cm</h6>
          <h6>Mass: 77kg</h6>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function MyPagination() {
  const [active, setActive] = useState(1);

  function handleClick(event) {
    let innerText = event.target.innerText;
    setActive(Number(innerText));
  }

  return (
    <>
      <SearchBar />
      <hr />
      {active === 1
        ? fakeAPI.map((obj, id) => {
            return (
              <MyCard
                key={id}
                name={obj.name}
                description={obj.description}
                pillText={obj.pillText}
              />
            );
          })
        : fakeAPI2.map((obj, id) => {
            return (
              <MyCard
                key={id}
                name={obj.name}
                description={obj.description}
                pillText={obj.pillText}
              />
            );
          })}

      <hr />
      <Pagination>
        <Pagination.Item key={1} onClick={handleClick} active={active === 1}>
          {1}
        </Pagination.Item>
        <Pagination.Item key={2} onClick={handleClick} active={active === 2}>
          {2}
        </Pagination.Item>
      </Pagination>
    </>
  );
}

export default App;
