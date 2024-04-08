import React from "react";
import { listings } from "../../Utils/listings";
import { Listing } from "../../../Types/listing";
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";

const CheckListing: React.FC = () => {
  return (
    <>
      <div className="px-4 md:px-12 mt-10 w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {listings.map((listing: Listing) => (
          <div key={listing.id} className="flex flex-col w-[270px]">
            <img
              src={listing.imageUrl}
              alt="rooms"
              className="w-[300px] h-[260px] rounded-2xl"
            />
            <div className="flex justify-between text-sm mt-4">
              <p className="font-semibold">{listing.location}</p>
              <p className="flex gap-1 items-center">
                <AiFillStar />
                {listing.rating}
              </p>
            </div>
            <p className="text-md text-gray-400">{listing.distance}</p>
            <p className="text-md text-gray-400">
              {listing.booking_date_range}
            </p>
            <div className="flex gap-1 mt-2">
              <p className="font-semibold flex">
                <BsCurrencyRupee className="text-md mt-1" />
                {listing.price}
              </p>
              <p>{listing.priceUnit}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 w-full flex flex-col justify-center items-center">
        <p className="w-full flex justify-center text-lg font-semibold items-center">
          Continue exploring amazing pools
        </p>
        <button className="inline-block py-3 px-6 rounded-xl mt-4 bg-black text-white text-lg font-semibold">
          Show more
        </button>
      </div>
    </>
  );
};

export default CheckListing;
