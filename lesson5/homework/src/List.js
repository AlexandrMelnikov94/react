import React from "react";

function List({value}) {
  const listOfNumber = value.map((num, index) => {
    return (<li key={num.toString() + 'index' + index}>{num}</li>)
  });
  return <ul>{listOfNumber}</ul>
}

export default List