import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./components/Movie";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  Button,
  Navbar,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";

function App() {
  const [response, setResponse] = useState([]);
  const [query, setQuery] = useState("marvel");

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    const data = await fetch(`http://api.tvmaze.com/search/shows?q=${query}`);
    const _data = await data.json();
    console.log(_data);
    setResponse(_data);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="xm">
        <Navbar.Brand href="#home">Movie Search</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-warning" type="submit">
            Search
          </Button>
        </Form>
      </Navbar>
      <Container fluid>
        <Row xs={1} sm={1} md={2} lg={3} xl={4}>
          {response.map((movie) => (
            <Movie
              name={movie.show.name}
              image={movie.show.image.medium}
              summary={movie.show.summary}
              genres={movie.show.genres}
              key={uuidv4()}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
