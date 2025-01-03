import Card from "./Card.js";
import SearchBox from "./SearchBox.js";
import resturantList from "../utils/mockData.js";
import { useState } from "react";

const Body = () => {
  const [listToUpdate, setListToUpdate] = useState(resturantList.restaurants); // this is to update the list of restaurants
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
