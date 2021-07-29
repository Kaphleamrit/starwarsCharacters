import React from "react";
import { Button, ButtonGroup, Container, Row } from "react-bootstrap";
import SearchIcon from "../assets/search.png";
import MenuIcon from "../assets/menu.png";

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <Container>
      <Row>
        <ButtonGroup
         size = "lg"
         style = {{
             marginLeft: '-11px',
         }}
         >
          <Button>
            <img src={SearchIcon} alt="search icon" />
          </Button>
          <Button
            id="searchBox"
            as="input"
            placeholder="Search Tasks"
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            value={searchText}
          ></Button>

          <Button>
            <img src={MenuIcon} alt="menu icon" />
          </Button>
        </ButtonGroup>
      </Row>
    </Container>
  );
};

export default SearchBar;
