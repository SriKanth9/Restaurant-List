import React from "react";

const Loading = (props) => {
  const restaurantDetails = props.eachRestaurant ? props.eachRestaurant : [];
  const list = Object.keys(restaurantDetails);
  const rest = restaurantDetails[list].map((item, idx) => (
    <li key={idx + 2}>
      <h2>{item.Brand}</h2>
      <p>{item.Variety}</p>
      {typeof item.Stars !== "string" ? (
        <p className="rating">*{item.Stars}</p>
      ) : (
        <p className="rating">*0</p>
      )}
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
