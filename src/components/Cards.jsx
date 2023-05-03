/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Cards = ({ item, handleCardDraw }) => {
  const [active, setActive] = useState(false);
  const [activeId, setActiveId] = useState(null);
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

  const cardStyle = {
    color:
      item.name === "Ateş"
        ? "#f87171"
        : item.name === "Su"
        ? "#60a5fa"
        : item.name === "Hava"
        ? "#93c5fd"
        : item.name === "Tahta"
        ? "#fbbf24"
        : "inherit",
    border: `4px solid ${active && activeId === item.id ? "#fff" : "red"}`,
  };

  return (
    <motion.div
      key={item.id}
      onClick={() => {
        handleCardDraw(item);
        setActive(true);
        setActiveId(item.id);
      }}
      initial={{ opacity: 0, y: 50 }}
      whileHover={{ translateY: -10, zIndex: 1 }}
      style={cardStyle}
      animate={controls}
      className="text-white card text-center  select-none w-[250px] p-2 h-96 flex flex-col items-center justify-between rounded-lg bg-gradient-to-tl from-[#FDC362] to-[#F7971E]
       cursor-pointer hover:bg-opacity-80 transition duration-300 border-4 border-red-400 hover:border-[#ffff] hover:shadow-lg"
    >
      <h2
        style={{
          textShadow: "2px 2px 2px #000000",
        }}
        className="text-2xl font-bold mb-2 mr-auto flex flex-col items-center "
      >
        {item.name}
        <span>
          {item.name === "Ateş" && "🔥"}
          {item.name === "Su" && "💧"}
          {item.name === "Hava" && "💨"}
          {item.name === "Tahta" && "🌱"}
        </span>
      </h2>

      <div className="avatar">
        <div className="w-32 h-32 object-contain">
          <img src={item.icon} alt={item.name} />
        </div>
      </div>
      <button
        type="button"
        className="btn bg-violet-500 text-white hover:bg-violet-700"
      >
        Kart Çek
      </button>
    </motion.div>
  );
};

export default Cards;
