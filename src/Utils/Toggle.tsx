import React from "react";
import { BsCheck2 } from "react-icons/bs";

interface Props {}

const Toggle: React.FC<Props> = function (_: Props) {
  return (
    <>
      <div className="bg-gray-300 w-16 h-auto rounded-full flex justify-start items-center">
        <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center border-2 border-gray-300">
          <BsCheck2 className="text-2xl text-gray-500 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default React.memo(Toggle);
