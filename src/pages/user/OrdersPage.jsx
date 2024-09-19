import React from 'react';
import { FcCancel } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";
import { FaClockRotateLeft } from "react-icons/fa6";

export default function OrdersPage() {
    const filters = [
        {name:  "All", icon: null},
        {name: "Pending", icon: <FaClockRotateLeft className="ml-1 text-md text-yellow-500"/>},
        {name: "Completed", icon: <FcCheckmark className="ml-1 text-xl"/>},
        {name: "Cancelled", icon: <FcCancel className="ml-1 text-xl"/>},
    ]

    return (
        <div className="flex flex-col items-center justify-evenly p-10">
          <b className="self-start text-3xl">Your Orders</b>
          <div id="filters" className="flex flex-row items-center justify-evenly border-b-2 border-[#8d745e] m-5 w-[80vw]">
              
              {filters.map((filter, index) => (
                <button key={index} className="hover:bg-[#f2ebe5] px-5 rounded-full transition duration-300 ease-in-out inline-flex items-center">

                    {filter.name}
                    {filter.icon}
                </button>
              ))}
          </div>
          <div id="filters" className="flex flex-col items-center rounded-full w-[80vw]">
              No orders to display
          </div>

        </div>
    )
}
   