import React from "react";
import ItemListResMenuCat from "./ItemListResMenuCat";

function RestaurantCategoryAccordion({ data }) {
  return (
    // Accordion Header
    <div className="w-1/2 justify-between mx-auto my-4 bg-slate-100 shadow-lg p-4 rounded-md ">
      <div className="flex justify-between font-bold text-lg">
        <div>
          {data?.title} ({data?.itemCards.length})
        </div>
        <div>🔽</div>
      </div>
      <br></br>
      {/* //Accordion Body */}

      {data?.itemCards.map((item) => {
        return (
          <div>
            <ItemListResMenuCat items={item} key={item.card.info.id} />
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantCategoryAccordion;
