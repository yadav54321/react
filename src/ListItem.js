import React from "react";

const ListItem = React.memo(function Item({ id, isSelected, clickHandler }) {
  console.log(id, isSelected);

  return (
    <button
      style={{ margin: "4px", color: isSelected ? "red" : "black" }}
      onClick={() => clickHandler(id)}
    >
      {id}
    </button>
  );
});

export default ListItem;
