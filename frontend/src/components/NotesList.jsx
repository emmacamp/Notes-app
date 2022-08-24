import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack, Button } from "react-bootstrap";
import Navigation from "./Navigation";

export default class NotesList extends Component {
  render() {
    return (
      <>
        <Navigation />
        NotesList
        <Stack direction="horizontal" gap={2}>
          <Button as="a" variant="primary">
            Button as link
          </Button>
          <Button as="a" variant="success">
            Button as link
          </Button>
        </Stack>
        <ul>
          <li>Note 1</li>
          <li>Note 2</li>
          <li>Note 3</li>
        </ul>
      </>
    );
  }
}
