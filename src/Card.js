import React from "react";
import locationIcon from "./images/location-icon.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="Mount Fuji" className="card-img" />
      <div className="card-info">
        <img src={locationIcon} alt="path-icon" />
        <p className="card-location">{props.location}</p>
        <p className="card-google">view on google</p>
        <h1 className="card-title">{props.title}</h1>
        <span className="card-date">
          <h4>{props.startDate} -</h4>
          <h4>{props.endDate}</h4>
        </span>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}
