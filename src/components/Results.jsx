/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
const Results = ({ card }) => {
  const flipDirection =
    card.position === "dik" ? "rotateY(0)" : "rotateY(180deg)";
  return (
    <motion.div
      className={`
      "text-white card text-center   w-[250px] p-2 h-96 flex flex-col items-center justify-between rounded-lg bg-gradient-to-tl from-[#FDC362] to-[#F7971E]
      cursor-pointer hover:bg-opacity-80 transition duration-300 border-4 border-red-400 hover:border-[#ffff] hover:shadow-lg rotate-180" `}
      initial={{ x: -2000 }}
      animate={{ x: 0 }}
      style={{
        transformStyle: "preserve-3d",
        transform: flipDirection,
      }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex justify-between items-center w-full">
        <h2
          style={{
            textShadow: "2px 2px 2px #000000",
          }}
          className="text-2xl font-bold mb-2 flex flex-col items-center "
        >
          {card.name}
          <span>
            {card.name === "Ateş" && "🔥"}
            {card.name === "Su" && "💧"}
            {card.name === "Hava" && "💨"}
            {card.name === "Tahta" && "🌱"}
          </span>
        </h2>
        <span className="text-4xl text-white font-bold border-2 border-black  p-2 rounded-full centered">
          {card.id}
        </span>
      </div>
      <div className="avatar">
        <div className="w-32 h-32 object-contain">
          <img
            src={card.icon}
            alt={card.name}
            className={card.position === "dik" ? "rotate-0" : "rotate-180"}
          />
        </div>
      </div>
      <button
        type="button"
        className="btn bg-gray-800 text-white hover:bg-violet-700"
      >
        Position: {card.position === "dik" ? "Dik" : "Ters"}
      </button>
    </motion.div>
  );
};

export default Results;
