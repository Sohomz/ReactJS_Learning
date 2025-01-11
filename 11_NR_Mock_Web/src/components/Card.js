import images from "../utils/contants";

const Card = (props) => {
  const {
    key,
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    avgRatingString,
  } = props.passData;
  const { deliveryTime } = props.passData.sla;

  const starsArray = [1, 2, 3, 4, 5];
  const fullStar = Math.floor(avgRatingString);
  const halfStar = Number(avgRatingString) - Number(fullStar) > 0.4 ? 1 : 0;
  const nullStar = images.TOTAL_STARS - (fullStar + halfStar);

  return (
    <div className="card-items w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-gray-300">
      <a href="#">
        <img
          className="p-6 rounded-t-lg h-64 w-full"
          src={`${images.FOODCARD_IMG}${cloudinaryImageId}`}
          alt="food image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </p>
        </a>
        <a href="#">
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
            {cuisines.join(", ")}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {/* Full Star Icon */}
            {starsArray.slice(0, fullStar).map((index) => {
              return (
                <svg
                  key={`fullStar-${index}`}
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              );
            })}
            {/* Half Star Icon */}
            {starsArray.slice(0, halfStar).map((index) => {
              return (
                <svg
                  key={`halfStar-${index}`}
                  className="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22 20"
                >
                  <defs>
                    <linearGradient
                      id="halfYellow"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="50%"
                        style={{ stopColor: "#FBBF24", stopOpacity: 1 }}
                      />{" "}
                      {/* yellow-300 */}
                      <stop
                        offset="50%"
                        style={{ stopColor: "#4B5563", stopOpacity: 1 }}
                      />{" "}
                      {/* gray-600 */}
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#halfYellow)"
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
              );
            })}
            {/* Null Star Icon */}
            {starsArray.slice(0, nullStar).map((index) => {
              return (
                <svg
                  key={`nullStar-${index}`}
                  className="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              );
            })}
          </div>

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {avgRatingString}
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {deliveryTime} mins
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {costForTwo}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
