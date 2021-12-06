import React from "react";

function List({value}) {
  const listOfNumber = value.map((num) => {
    return (<li>{num}</li>)
  });
  return <ul>{listOfNumber}</ul>
}

export default List