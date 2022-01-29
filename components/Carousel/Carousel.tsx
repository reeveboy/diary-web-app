import React, { useState } from "react";
import Item from "./Item";
import { AnimateSharedLayout } from "framer-motion";

export interface item {
  number?: number;
  special?: string;
}

interface Props {
  items: item[];
  active: number;
}

const Carousel = ({ items }: Props) => {
  const [active, setActive] = useState(items.length - 1);

  function moveLeft() {
    setActive((prev) => (prev <= 1 ? prev : prev - 1));
  }
  function moveRight() {
    setActive((prev) => (prev > items.length - 2 ? prev : prev + 1));
  }
  function generateItems() {
    let screenItems = [];

    for (let i = active - 1; i < active + 2; i++) {
      let index = i;
      let flag = false;
      if (i >= items.length) flag = true;

      let level = Math.abs(active - i);

      if (flag) {
        screenItems.push(
          <Item key={index} item={{ special: "+" }} level={level} />
        );
        continue;
      }

      screenItems.push(<Item key={index} item={items[index]} level={level} />);
    }

    return screenItems;
  }

  return (
    <div className="flex justify-center items-center p-4">
      <div onClick={moveLeft}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </div>
      <AnimateSharedLayout>{generateItems()}</AnimateSharedLayout>
      <div onClick={moveRight}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Carousel;
