import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
interface Note {
  day: number;
  note: string;
}

interface Props {
  notes: Note[];
}

const Carousel = ({ notes }: Props) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel]);

  return (
    <motion.div
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
      className="cursor-grab overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ right: width, left: -width }}
        className="flex justify-center">
        {notes.map((note, idx) => {
          return (
            <motion.div
              className="flex flex-col items-center m-4"
              key={idx}
              whileTap={{ scale: 1.1 }}>
              <span className="text-white font-extralight">Day {note.day}</span>
              <motion.div className="p-4 text-ellipsis overflow-hidden min-h-[250px] max-h-[250px] min-w-[250px] bg-[#D0F9FF] rounded-lg">
                <span className="mt-2 text-sm">{note.note}</span>
              </motion.div>
            </motion.div>
          );
        })}
        <motion.div
          className="flex flex-col items-center justify-end m-4"
          whileTap={{ scale: 1.1 }}>
          <div className="flex justify-center items-center p-4 text-ellipsis overflow-hidden min-h-[250px] max-h-[250px] min-w-[250px] bg-[#D0F9FF] rounded-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1237/1237946.png"
              alt=""
              height={40}
              width={40}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
