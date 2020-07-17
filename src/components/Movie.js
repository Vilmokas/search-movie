import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Col,
  Button,
  Badge,
} from "react-bootstrap";
import style from "../css/modules/movie.module.css";
import { Markup } from "interweave";
import { v4 as uuidv4 } from "uuid";

function Movie({ name, image, summary, genres }) {
  return (
    <Col className={style.movie}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Markup content={summary} />
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="d-flex justify-content-around">
            {genres.length ? (
              genres.map((genre) => (
                <Badge pill variant="secondary" key={uuidv4()}>
                  {genre}
                </Badge>
              ))
            ) : (
              <Badge pill variant="secondary">
                No genres
              </Badge>
            )}
          </ListGroupItem>
        </ListGroup>
        <Card.Body className="d-flex justify-content-around">
          <Button
            className={style.imdb}
            variant="warning"
            // onClick="https://www.imdb.com/title/tt10857164/" add so you go to imdb when clicked
          >
            IMDb
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Movie;
