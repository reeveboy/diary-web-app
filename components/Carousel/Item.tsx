import React from "react";
import type { item as itemType } from "./Carousel";
import { motion } from "framer-motion";

interface Props {
  item: itemType;
  level: number;
}

const Item = ({ item, level }: Props) => {
  if (level == 1) {
    return (
      <motion.div className="w-[130px] h-[180px] bg-sky-400 rounded-lg mx-2 flex justify-center items-center">
        <span className="text-white text-4xl font-bold">
          {item.number ? item.number : item.special}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div className="w-[150px] h-[200px] bg-sky-400 rounded-lg mx-2 flex justify-center items-center">
      <span className="text-white text-4xl font-bold">
        {item.number ? item.number : item.special}
      </span>
    </motion.div>
  );
};

export default Item;
