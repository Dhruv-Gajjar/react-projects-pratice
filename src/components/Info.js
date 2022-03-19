import React from "react";
import personImg from "../images/person.png";

export default function Info() {
  return (
    <header className="info">
      <img src={personImg} alt="person" className="person-img" />
      <main className="info-main">
        <h1 className="info-name">Laura Smith</h1>
        <h3 className="dev">Frontend Developer</h3>
        <p className="info-email">laurasmith.website</p>
        <span>
          <button className="email-btn">Email</button>
          <button className="linkedin-btn">Linkedin</button>
        </span>
      </main>
    </header>
  );
}
