import { useEffect, useState } from "react";

const ResturantMenu = () => {
  const [individualResturant, setIndividualResturant] = useState({});

  useEffect(() => {
    fetchMenudata();
  }, []);

  const fetchMenudata = async () => {
    try {
      const fetchedAPI = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=651011&catalog_qa=undefined&submitAction=ENTER"
      );
      const jsonConverter = await fetchedAPI.json();
      const dataofMenu =
        jsonConverter.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1]
          .card.card.itemCards[3].card.info;
      setIndividualResturant(dataofMenu);
      console.log(dataofMenu);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Resturant Menu: {individualResturant.name}</h1>
      <p>Menu items will be displayed here</p>
      <ul>
        <li>Biriyani</li>
        <li>Chicken Curry</li>
        <li>Paneer Butter Masala</li>
        <li>Chole Bhature</li>
        <li>Idli Sambhar</li>
      </ul>
    </div>
  );
};

export default ResturantMenu;
