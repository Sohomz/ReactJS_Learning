import images from "../utils/contants";

const Header = () => {
  return (
    <div className="flex fixed items-center h-20 p-4 mb-10 bg-gray-800 w-full top-0 z-20">
      <img
        src={images.LOGO_IMG}
        alt="logo"
        className="imglogo"
        style={{ width: "70px", height: "70px" }}
      />
      <ul className="nav flex ml-4 mr-4 space-x-10 justify-end w-full cursor-pointer text-white">
        <li>Home</li>
        <li>Menu</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Header;
