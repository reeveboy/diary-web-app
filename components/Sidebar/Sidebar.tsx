import React from "react";
import Item from "./Item";

const Sidebar = () => {
  return (
    <div className="w-[300px] h-screen flex flex-col bg-[#D0F9FF] px-2 py-4">
      <div className="flex justify-between items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <div className="shadow-md px-4 py-1 bg-white rounded-[10px] flex justify-center items-center">
          <span className="text-sm ">arima</span>
        </div>
      </div>

      <div className="flex flex-col justify-between h-screen p-2">
        <div className="flex flex-col">
          <Item name="Home">
            <img
              src="https://cdn-icons-png.flaticon.com/512/619/619032.png"
              height={30}
              width={30}
            />
          </Item>
          <Item name="Create Goal">
            <img src="/icons/goal.png" height={30} width={30} />
          </Item>
          <Item name="See all Goals">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3050/3050426.png"
              height={30}
              width={30}
            />
          </Item>
        </div>
        <div className="flex flex-col">
          <Item name="Settings">
            <img src="/icons/settings.png" height={30} width={30} />
          </Item>
          <Item name="Logout">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1716/1716282.png"
              height={30}
              width={30}
            />
          </Item>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
