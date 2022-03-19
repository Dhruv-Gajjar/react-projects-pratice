import React from "react";
import personImg from "../images/person.png";

export default function Info() {
  return (
    <header className="info">
      <img src={personImg} alt="person" />
      <h1>Dhruv Gajjar</h1>
      <h3>Frontend Developer</h3>
      <p>dhruvgajjar07@gmail.com</p>
      <span>
        <button>Email</button>
        <button>Linkedin</button>
      </span>
    </header>
  );
}
