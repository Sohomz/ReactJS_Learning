import React from "react";

function ItemListResMenuCat({ items }) {
  return (
    <div className="border-b-2 flex">
      <div>
        <div className="font-semibold">{items.card.info.name}</div>
        <span className="font-semibold font-serif">
          {parseFloat(items.card.info.price / 100).toFixed(2)}
        </span>
        <br></br>
        <br></br>
        <p className="font-light">{items.card.info.description}</p>
      </div>
      <div>
        <div>
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${items.card.info.imageId}`}
            alt={items.card.info.name}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ItemListResMenuCat;
