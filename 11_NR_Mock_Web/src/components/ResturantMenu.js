import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResturantMenu = () => {
  const { resId } = useParams();
  const restaurantData = useRestaurantMenu(resId);

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
      <ol>
        {console.log(menuItems)}
        {menuItems?.length > 0 ? (
          menuItems.map((menuCard, index) => (
            <li key={index}>{menuCard.card.info.name}</li>
          ))
        ) : (
          <li>No menu items available.</li>
        )}
      </ol>
    </div>
  );
};

export default ResturantMenu;
