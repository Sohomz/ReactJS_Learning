import Card from "./Card.js";
import SearchBox from "./SearchBox.js";
import resturantList from "../utils/mockData.js";

const Body = () => {
  return (
    <div>
      <div className="res-container">
        <SearchBox />
        {resturantList.restaurants.map((i) => (
          <Card passData={i.info} key={i.info.id} />
        ))}
      </div>
    </div>
  );
};
// TODO: Fetch data from API directly and pass it to the Card component

export default Body;
