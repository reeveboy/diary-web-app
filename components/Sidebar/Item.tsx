import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  name: string;
}

const Item = ({ children, name }: Props) => {
  return (
    <button className="flex bg-white px-5 py-4 rounded-md shadow-md items-center mt-4 transition duration-200 hover:translate-x-1">
      {children}
      <span className="ml-4 text-md font-medium">{name}</span>
    </button>
  );
};

export default Item;
