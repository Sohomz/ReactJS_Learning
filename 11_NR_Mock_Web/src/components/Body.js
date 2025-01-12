import Card from "./Card.js";
import SearchBox from "./SearchBox.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import resturantList from "../utils/mockData.js";

const Body = () => {
  const [listToUpdate, setListToUpdate] = useState(resturantList.restaurants); // this is to update the list of restaurants
  const [error, setError] = useState(false); // this is to handle the error state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const fetchedAPI = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.867114&lng=88.3674381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonConverted = await fetchedAPI.json();
      const dataOfRestuarant =
        jsonConverted.data.cards[2].card.card.gridElements.infoWithStyle
          .restaurants;
      console.log(dataOfRestuarant);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      <SearchBox
        listToUpdate={listToUpdate}
        setListToUpdate={setListToUpdate}
      />

      {listToUpdate.length === 0 || error ? (
        <div>
          <Shimmer />
        </div>
      ) : (
        <div className="res-container">
          {listToUpdate.map((i) => (
            <Card passData={i.info} key={i.info.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
