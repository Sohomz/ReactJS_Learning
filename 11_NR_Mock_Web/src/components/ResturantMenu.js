import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=${resId}`
      );
      const jsonData = await response.json();
      setRestaurantData(jsonData.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  const getCardData = (index) => restaurantData?.cards?.[index]?.card?.card;
  const restaurantInfo = getCardData(0)?.text;
  const rating = getCardData(2)?.info?.avgRating;
  const costForTwo = getCardData(2)?.info?.costForTwoMessage;
  const areaName = getCardData(2)?.info?.areaName;
  const minDeliveryTime = getCardData(2)?.info?.sla?.minDeliveryTime;
  const maxDeliveryTime = getCardData(2)?.info?.sla?.maxDeliveryTime;
  const menuItems =
    restaurantData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[8]
      ?.card?.card?.itemCards;

  if (!restaurantData) {
    return <Shimmer />;
  }

  return (
    <div>
      <h1>Restaurant Name: {restaurantInfo}</h1>
      <h1>
        Rating: {rating}
        Cost for two: {costForTwo}
      </h1>
      <h1>Outlet: {areaName}</h1>
      <h1>
        Delivery Time: {minDeliveryTime} - {maxDeliveryTime} mins
      </h1>
      <p>Menu items will be displayed here:</p>
      <ul>
        {console.log(menuItems)}
        {menuItems?.length > 0 ? (
          menuItems.map((menuCard, index) => (
            <li key={index}>{menuCard.card.info.name}</li>
          ))
        ) : (
          <li>No menu items available.</li>
        )}
      </ul>
    </div>
  );
};

export default ResturantMenu;
