import Card from "./Card.js";
import SearchBox from "./SearchBox.js";
import resturantList from "../utils/mockData.js";
import { useEffect, useState } from "react";

const Body = () => {
  const [listToUpdate, setListToUpdate] = useState(resturantList.restaurants); // this is to update the list of restaurants
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchedAPI = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.867114&lng=88.3674381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonConverted = await fetchedAPI.json();
    console.log(
      jsonConverted.data.cards[2].card.card.gridElements.infoWithStyle
        .restaurants
    );
  };

  return (
    <div>
      <div className="res-container">
        {/* <SearchBox /> */}
        <SearchBox
          listToUpdate={listToUpdate}
          setListToUpdate={setListToUpdate}
        />
        {/* //I have to pass it because searchBox has the filterBox component
        although Searchbox dont need it, Prop drilling */}
        {listToUpdate.map((i) => (
          <Card passData={i.info} key={i.info.id} />
        ))}
      </div>
    </div>
  );
};
// TODO: Fetch data from API directly and pass it to the Card component

export default Body;
