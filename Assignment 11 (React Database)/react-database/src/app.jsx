import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/information">Personal Info</Link> |{" "}
          <Link to="/hobbies">Hobbies</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome to the Database App</h1>} />
          <Route path="/information" element={<PersonalInfo />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </div>
    </Router>
  );
}

function PersonalInfo() {
  const [personalInfo, setPersonalInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/information").then((response) => {
      setPersonalInfo(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Personal Information</h1>
      {personalInfo.map((person) => (
        <div key={person.id}>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
          <p>Email: {person.email}</p>
          <p>Phone: {person.phone}</p>
          <p>Hobbies: {person.hobbies}</p>
          <br></br>
        </div>
      ))}
    </div>
  );
}

function Hobbies() {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/hobbies").then((response) => {
      setHobbies(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Hobbies</h1>
      {hobbies.map((hobby) => (
        <div key={hobby.id}>
          <p>Hobby: {hobby.hobby}</p>
          <p>Description: {hobby.description}</p>
          <p>Category: {hobby.category}</p>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default App;
