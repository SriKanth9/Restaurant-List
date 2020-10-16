import React from "react";
import Loading from "./Loading";
import SearchResult from "./SearchResult";
const Restaurant = (props) => {
  const search = props.filter;
  const topPics = {};
  const restaurantDetails = props.allRest ? props.allRest : [];

  //get the years data
  restaurantDetails.forEach((item, idx) => {
    let year = parseInt(item["Top Ten"].split(" "), 10);
    if (!topPics[year]) {
      topPics[year] = 1;
    }
  });

  //filter the restaurant based on search
  restaurantDetails.filter((val, idx) => {
    let x = val.Brand.split(" ")[0].toLowerCase().toString();
    return x.includes(search);
  });

  //filter the restaurants bsed on year
  const filterByYear = [],
    filterBySearch = [];
  Object.keys(topPics).forEach((item, idx) => {
    let result = restaurantDetails.filter((value, idx) => {
      return value["Top Ten"].split(" ")[0] === item;
    });
    filterByYear.push({ [item]: result });
  });

  //implement search functionality
  let searchResult = restaurantDetails.filter((value, idx) => {
    return value.Brand.split(" ")[0].toLowerCase().includes(search);
  });
  filterBySearch.push(...searchResult);

  // console.log(restaurantDetails);
  return (
    <>
      {search.length < 1 ? (
        filterByYear.map((item, idx) => (
          <Loading key={idx + 1} eachRestaurant={item} />
        ))
      ) : (
        <ul>
          {searchResult.map((item, idx) => (
            <SearchResult key={idx + 3} searchItm={item} />
          ))}
        </ul>
      )}
    </>
  );
};
export default Restaurant;
