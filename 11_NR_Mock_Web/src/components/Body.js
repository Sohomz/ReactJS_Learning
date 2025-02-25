import Card, { withOnlineLabel } from "./Card.js";
import SearchBox from "./SearchBox.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listToUpdate, setListToUpdate] = useState([]); // this is to update the list of restaurants
  const [error, setError] = useState(false); // this is to handle the error state
  const [filteredResturant, setFilteredResturant] = useState([]); // this is to fix search bug if do 2nd or 3rd or more than that
  const RestaurantCardOnline = withOnlineLabel(Card);
  useEffect(() => {
    console.log("useEffect for fetchData running");
    fetchData();
  }, []);

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
  const onlineOfflineStatus = useOnlineStatus();

  console.log(listToUpdate);

  useEffect(() => {
    console.log("Online status changed:", onlineOfflineStatus);
  }, [onlineOfflineStatus]);
  if (!onlineOfflineStatus) {
    return <h1>Hey, you are offline</h1>;
  } else {
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
            <div className="flex flex-wrap p-10 justify-evenly items-center mt-48">
              {filteredResturant.map((i) =>
                !i.info.isOpen ? (
                  <Card key={i.info.id} passData={i.info} />
                ) : (
                  <RestaurantCardOnline key={i.info.id} passData={i.info} />
                )
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Body;
