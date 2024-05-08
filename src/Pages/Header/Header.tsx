import { FiGlobe } from "react-icons/fi";
import airbnb from "../../assets/airbnb.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center border-b border-gray-200 pb-8">
      <div className="w-full h-auto flex justify-between sm:px-14 px-3 py-5">
        <div className="flex justify-center items-center">
          <img src={airbnb} className="h-10" alt="logo" />
        </div>
        <div className="max-sm:hidden flex gap-12 pl-20 ml-20 flex-1 text-gray-500 justify-center items-center">
          <p className="font-bold">Stays</p>
          <p>Experiences</p>
          <p>Online Experiences</p>
        </div>
        <div className="flex gap-6 justify-center items-center pr-3">
          <p className="font-semibold max-sm:text-sm max-sm:w-full">
            Airbnb your home
          </p>
          <FiGlobe className="text-xl max-sm:hidden" />
          <button className="flex gap-6 border border-gray-200 hover:shadow-md rounded-full py-2 px-3 justify-center items-center">
            <RxHamburgerMenu className="text-[1.2rem]" />
            <FaUserCircle className="text-5xl text-gray-500" />
          </button>
        </div>
      </div>
      <div className="sm:w-4/6 w-9/12 h-auto flex justify-between border border-gray-300 p-2 rounded-full shadow-lg">
        <div className="flex flex-1 flex-col  px-10 justify-center items-start hover:bg-gray-200 hover:rounded-full border-r border-gray-200">
          <p className="text-xs font-semibold">Where</p>
          <p className="text-sm text-gray-500">Search destinations</p>
        </div>
        <div className="max-sm:hidden flex flex-col w-1/6 px-10 justify-center items-start hover:bg-gray-200 hover:rounded-full border-r border-gray-200">
          <p className="text-xs font-semibold">Check in</p>
          <p className="text-sm text-gray-500">Add dates</p>
        </div>
        <div className="max-sm:hidden flex flex-col w-1/6  px-10 justify-center items-start hover:bg-gray-200 hover:rounded-full border-r border-gray-200">
          <p className="text-xs font-semibold">Check out</p>
          <p className="text-sm text-gray-500">Add dates</p>
        </div>
        <div className="flex flex-1 max-sm:justify-end pl-10 justify-between items-center hover:bg-gray-200 hover:rounded-full">
          <div className="flex flex-col max-sm:hidden ">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm text-gray-500">Add guests</p>
          </div>
          <div className=" flex justify-center items-center bg-[#DE1361] rounded-full p-4">
            <CgSearch className="text-4xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
