/* eslint-disable no-unused-vars */
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import List from "./constants/List";
import Cards from "./components/Cards";
import Results from "./components/Results";
import ChatBox from "./components/ChatBox";
import FlipCard from "./../public/audio/flipcard.mp3";

const App = () => {
  const [show, setShow] = useState(true);
  const [cards, setCards] = useState([]);
  const flipCardAudio = new Audio(FlipCard);

  const handleCardDraw = (item) => {
    const randomCard = Math.floor(Math.random() * 52) + 1;
    const randomPosition = Math.random() < 0.5 ? "dik" : "yatay";
    const card = {
      id: randomCard,
      name: item.name,
      position: randomPosition,
      icon: item.icon,
    };
    if (cards.filter((card) => card.name === item.name).length < 1) {
      if (cards.length === 3) {
        setTimeout(() => {
          setShow(false);
        }, 4000);
      }
      toast.success(`${item.name} kartını çektin!`);
      setCards((prevCards) => [...prevCards, card]);
      flipCardAudio.play();
    } else {
      toast.error(`${item.name} kartını zaten çektiniz!`);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gradient-to-tl from-[#6F2831]  to-[#231214] justify-center ">
      <h1 className="font-bold text-4xl text-white">Kart Oyunu</h1>
      {show && (
        <div className="flex justify-center space-x-8 mt-8">
          {List.map((item) => (
            <Cards key={item.id} item={item} handleCardDraw={handleCardDraw} />
          ))}
        </div>
      )}
      <div className="flex justify-center mt-8 gap-2">
        {cards.length >= 1 &&
          cards.map((card) => <Results key={card.id} card={card} />)}
      </div>
      {cards.length === 4 && show === false && <ChatBox item={cards} />}
      <ToastContainer />
    </div>
  );
};

export default App;
