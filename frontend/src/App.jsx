import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//npm start

import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/edit/:id" element={<CreateNote />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      
    </Router>
  );
}

export default App;
