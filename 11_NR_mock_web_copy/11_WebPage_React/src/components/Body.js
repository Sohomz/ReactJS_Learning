import Card from "./Card.js";
import SearchBox from "./SearchBox.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom"; // Correct import for Link
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listToUpdate, setListToUpdate] = useState([]); // this is to update the list of restaurants
  const [error, setError] = useState(false); // this is to handle the error state
  const [filteredResturant, setFilteredResturant] = useState([]); // this is to fix search bug if do 2nd or 3rd or more than that
  const onlineOfflineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("useEffect for fetchData running");
    fetchData();
  }); // Empty dependency array means this effect runs once after the initial render

  useEffect(() => {
    console.log("Online status changed:", onlineOfflineStatus);
  }, [onlineOfflineStatus]);

  const fetchData = async () => {
    console.log("fetchData function called");
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
      console.log("Data fetched and state updated");
    } catch (error) {
      setError(true);
      console.log("Error in fetchData:", error);
    }
  };

  if (!onlineOfflineStatus) {
    return <h1>Hey, you are offline</h1>;
  }

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
              <Card key={i.info.id} passData={i.info} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
