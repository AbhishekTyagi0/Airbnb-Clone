import React from "react";
import { experienceList } from "../../Utils/experienceList";
import { RiSoundModuleFill } from "react-icons/ri";
import Toggle from "../../Utils/Toggle";

interface Prop {}

interface ExperienceItem {
  id: number;
  icon: React.ReactNode;
  name: string;
}

const Experiences: React.FC<Prop> = () => {
  return (
    <div className="w-dvw sm:mt-10 mt-3 flex sm:px-24  justify-center gap-6">
      <div className="flex flex-1 overflow-x-auto overflow-hidden scrollbar-none">
        {experienceList.map((item: ExperienceItem) => (
          <div
            key={item.id}
            className="flex flex-col sm:h-16 items-center justify-between cursor-pointer"
          >
            <p className="sm:w-28 w-20 text-4xl text-gray-500 flex justify-center">
              {item.icon}
            </p>
            <p className="sm:w-28 w-20 sm:text-xs text-[6px] font-bold text-gray-400 flex justify-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="hover:border max-sm:hidden hover:border-black flex gap-5 border border-gray-300 rounded-2xl px-5 justify-center items-center">
        <RiSoundModuleFill className="text-3xl font-bold text-gray-700" />
        <p className="text-xs font-semibold text-gray-700">Filters</p>
      </div>
      <div className="hover:border max-sm:hidden hover:border-black cursor-pointer flex gap-5 border border-gray-300 px-5 rounded-2xl justify-center items-center">
        <p className="text-xs font-semibold text-gray-500">
          Display total before taxes
        </p>
        <Toggle />
      </div>
    </div>
  );
};

export default Experiences;
