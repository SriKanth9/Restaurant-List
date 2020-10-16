import React from "react";

const Loading = (props) => {
  const restaurantDetails = props.eachRestaurant ? props.eachRestaurant : [];
  const list = Object.keys(restaurantDetails);
  const rest = restaurantDetails[list].map((item, idx) => (
    <li key={idx + 2}>
      <h3>{item.Brand}</h3>
      <p>{item.Variety}</p>
      <p>{item.Stars}</p>
    </li>
  ));

  return (
    <>
      <h3>{list.toString()}</h3>
      <ul>{rest}</ul>
    </>
  );
};
export default Loading;
