import { useState } from "react";
import {
  categories,
  popular,
  art,
  outdoors,
  mountains,
  beach,
  things,
} from "../Utils/categories";

function Categories(): JSX.Element {
  const [currentCategory, setCurrentCategory] = useState(popular);

  const handleCategoryClick = (category: string) => {
    switch (category) {
      case "Popular":
        setCurrentCategory(popular);
        break;
      case "Arts & Culture":
        setCurrentCategory(art);
        break;
      case "Outdoors":
        setCurrentCategory(outdoors);
        break;
      case "Mountains":
        setCurrentCategory(mountains);
        break;
      case "Beach":
        setCurrentCategory(beach);
        break;
      case "Things to do":
        setCurrentCategory(things);
        break;
      default:
        setCurrentCategory(popular);
    }
  };

  return (
    <div className="w-full h-[320px] bg-gray-100">
      <p className="pl-10 pt-16 font-semibold text-xl mt-16">
        Inspiration for future getaways
      </p>
      <div className="max-sm:hidden flex gap-5 pl-10 pt-5 font-semibold text-gray-500 overflow-hidden scrollbar-none">
        {categories.map((item) => (
          <button
            className="hover:text-gray-800"
            key={item.id}
            onClick={() => handleCategoryClick(item.text)}
          >
            {item.text}
          </button>
        ))}
      </div>
      <div className="sm:hidden flex gap-5 pl-10 pt-5 font-semibold text-gray-500 overflow-hidden scrollbar-none">
        {categories.slice(0, 5).map((item) => (
          <button
            className="hover:text-gray-800"
            key={item.id}
            onClick={() => handleCategoryClick(item.text)}
          >
            {item.text}
          </button>
        ))}
      </div>

      <hr className="border border-gray-300 my-4 mx-10" />
      <div className="h-[180px] sm:h-[200px] w-full sm:w-[85%] flex flex-col flex-wrap gap-6 sm:gap-10 pl-4 overflow-hidden overflow-x-auto">
        {currentCategory.map((item) => (
          <div
            className="flex gap-6 sm:pl-10 pl-4 pt-2 font-semibold text-gray-500 "
            key={item.subheading}
          >
            <div className="flex gap-1 flex-col">
              <p className="text-sm text-black hover:underline cursor-pointer">
                {item.subheading}
              </p>
              <p className="text-xs">{item.subheadingType}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
