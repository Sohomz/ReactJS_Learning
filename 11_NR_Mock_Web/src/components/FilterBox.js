const FilterBox = ({ listToUpdate, setListToUpdate }) => {
  return (
    <button
      type="button"
      onClick={() => {
        const filteredRestuarant = listToUpdate.filter(
          (res) => res.info.avgRating > 4.5
        );
        setListToUpdate(filteredRestuarant);
      }}
      className="mr-4 text-white absolute end-20 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      Top rated Restaurants
    </button>
  );
};

export default FilterBox;