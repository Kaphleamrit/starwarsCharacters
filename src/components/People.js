import { Button, ButtonGroup } from "react-bootstrap";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { usePaginatedQuery } from "react-query";
import MyCard from "./MyCard";
import SearchBar from "./SearchBar";
import DetailsPage from "./DetailsPage";

const fetchData = async (key, page, searchText ) => {
 let res;
  if(searchText === '')
   res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  else
  res = await fetch(`https://swapi.dev/api/people/?search=${searchText}&page=${page}`);
  return res.json();
};

const People = () => {
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [activePage, setActivePage] = useState("people");
  const [getId, setId] = useState(0);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["people", page, searchText],
    fetchData
  );

  return activePage === "personDetails" ? (
    <DetailsPage resolvedData={resolvedData} id={getId} setActivePage = {setActivePage} />
  ) : (
    <Container>
      <SearchBar setSearchText = {setSearchText} searchText = {searchText}/>
      {status === "loading" && <p>Loading</p>}
      {status === "error" && <p>Error</p>}
      {status === "success" && (
        <>
          {resolvedData.results.map((person, id) => (
            <div>
              <MyCard
                key={id}
                person={person}
                setActivePage={setActivePage}
                setId={setId}
                id={id}
              />
            </div>
          ))}
          <ButtonGroup>
            <Button
              onClick={() => setPage((old) => Math.max(old - 1, 1))}
              disabled={page === 1}
            >
              Prev
            </Button>
            <Button
              disabled
              style={{
                background: "#000000",
              }}
            >
              {page}
            </Button>
            <Button
              onClick={() =>
                setPage((old) =>
                  !latestData || !latestData.next ? old : old + 1
                )
              }
              disabled={!latestData || !latestData.next}
            >
              Next
            </Button>
          </ButtonGroup>
        </>
      )}
    </Container>
  );
};

export default People;
