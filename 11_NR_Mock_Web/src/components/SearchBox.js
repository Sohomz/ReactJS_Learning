import FilterBox from "./FilterBox";
import { useState } from "react";
import Popup from "./Popup";

const SearchBox = ({
  listToUpdate,
  setListToUpdate,
  filteredResturant,
  setFilteredResturant,
}) => {
  //I have to pass it because searchBox has the filterBox component
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div class="fixed top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-1 z-40 flex w-2/5">
      <form className="max-w-screen-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="absolute">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }} // Add the onChange event
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for foods, restrants, etc."
            required
          />
          <FilterBox
            listToUpdate={listToUpdate}
            setListToUpdate={setListToUpdate}
            filteredResturant={filteredResturant}
            setFilteredResturant={setFilteredResturant}
          />
          <input
            type="button"
            value={"Search"}
            onClick={() => {
              try {
                const filteredSearchValue = listToUpdate.filter((res) => {
                  const resName = res.info.name
                    .toLowerCase()
                    .includes(searchText.trim().toLowerCase());
                  const cuisineString = res.info.cuisines.join(" ");
                  const cuisineSearch = cuisineString
                    .toLowerCase()
                    .includes(searchText.trim().toLowerCase());
                  return resName || cuisineSearch;
                });
                if (filteredSearchValue.length === 0) {
                  throw new Error("No resturant found..... Refresh the page");
                } else {
                  setFilteredResturant(filteredSearchValue);
                }
              } catch (e) {
                setError(true);
                setShowPopup(true);
                //console.log(e);

                setTimeout(() => {
                  setShowPopup(false);
                  setError(false);
                }, 1000);
              }
            }}
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          ></input>
        </div>
      </form>
      <Popup message="No restaurant found." showPopup={showPopup} />
    </div>
  );
};

export default SearchBox;
