/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Cards = ({ item, handleCardDraw }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    });
  }, [controls]);

  return (
    <motion.div
      key={item.id}
      onClick={() => handleCardDraw(item)}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="text-white card text-center p-4 h-72 flex flex-col items-center justify-between rounded-lg bg-[#1A0033] cursor-pointer hover:bg-opacity-80 transition duration-300 border-4 border-[#9a54e0] hover:border-[#ffff] hover:shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
      <div className="avatar">
        <div className="w-24 object-contain">
          <img src={item.icon} alt={item.name} />
        </div>
      </div>
      <button
        type="button"
        className="btn bg-violet-500 text-white hover:bg-violet-700"
      >
        Kart çekmek için tıklayınız
      </button>
    </motion.div>
  );
};

export default Cards;
