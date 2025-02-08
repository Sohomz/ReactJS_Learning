import Card from "./Card.js";
import SearchBox from "./SearchBox.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router";

const Body = () => {
  const [listToUpdate, setListToUpdate] = useState([]); // this is to update the list of restaurants
  const [error, setError] = useState(false); // this is to handle the error state
  const [filteredResturant, setFilteredResturant] = useState([]); // this is to fix search bug if do 2ndor 3rd or more than that
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("bad things print");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("it unmounted");
    };
  }, []);
  //    fetchData();

  const fetchData = async () => {
    try {
      const fetchedAPI = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.867114&lng=88.3674381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonConverted = await fetchedAPI.json();
      const dataOfRestuarant =
        jsonConverted.data.cards[1].card.card.gridElements.infoWithStyle
          .restaurants;
      setListToUpdate(dataOfRestuarant);
      setFilteredResturant(dataOfRestuarant);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div>
      {listToUpdate.length === 0 || error ? (
        <div>
          <Shimmer />
        </div>
      ) : (
        <div>
          <SearchBox
            listToUpdate={listToUpdate}
            setListToUpdate={setListToUpdate}
            filteredResturant={filteredResturant}
            setFilteredResturant={setFilteredResturant}
          />
          <div className="res-container">
            {filteredResturant.map((i) => (
              <Link key={i.info.id} to={"/resturants/" + i.info.id}>
                <Card passData={i.info} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
