import { CiGlobe } from "react-icons/ci";
import { footer } from "../Utils/Footer";
import { ImFacebook2 } from "react-icons/im";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <hr className="border border-gray-200" />

      <div className="grid grid-cols-3 gap-2 w-full h-[250px] bg-gray-100 p-10">
        {footer.map((section) => (
          <div key={section.heading} className="flex flex-col space-y-2 gap-4">
            <h3 className="font-bold">{section.heading}</h3>
            <ul className="text-sm flex gap-4 flex-col">
              {section.data.map((item) => (
                <li
                  key={item.id}
                  className="text-gray-500 cursor-pointer hover:underline"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="border border-gray-200" />
      <div className="w-full flex bg-gray-100 h-[50px] justify-between items-center px-10">
        <div className="text-md flex gap-6 items-center text-gray-500">
          <span>© 2024 Airbnb, Inc. </span> <span> Privacy </span>
          <span> Terms </span>
          <span> Sitemap </span>
          <span> Company details </span>
        </div>
        <div className="text-md flex gap-6 items-center text-bold text-xl">
          <span>
            <CiGlobe className="text-3xl" />
          </span>
          <span className=" text-sm">English (IN)</span>
          <span className=" text-sm">₹ INR</span>
          <span>
            <ImFacebook2 />
          </span>
          <span>
            <FaInstagramSquare />
          </span>
          <span>
            <TiSocialTwitter className="text-3xl" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
