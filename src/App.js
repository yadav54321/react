import React, { useState, useCallback } from "react";
import Title from "./Title";
import ListItem from "./ListItem";

const data = [1, 2, 3, 4, 5, 6];

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClick = useCallback((id) => {
    console.log("id", id);
    setSelectedItem(id);
  }, []);
  return (
    <div className="App">
      <Title />
      {data.map((id) => (
        <ListItem
          key={id}
          id={id}
          isSelected={selectedItem === id}
          // clickHandler={(id) => setSelectedItem(id)}
          clickHandler={handleClick}
        />
      ))}
    </div>
  );
}
