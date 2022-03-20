import React from "react";
import data from "./data";
import Navbar from "./Navbar";
import Card from "./Card";

export default function App() {
  let appData = data.map((items) => {
    return (
      <Card
        key={items.id}
        img={items.imageUrl}
        title={items.title}
        location={items.location}
        text={items.description}
        startDate={items.startDate}
        endDate={items.endDate}
        map={items.googleMapsUrl}
      />
    );
  });
  return (
    <div>
      <Navbar />
      {appData}
    </div>
  );
}
