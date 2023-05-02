/* eslint-disable no-unused-vars */
import { useState } from "react";
import List from "./constants/List";
import Cards from "./components/Cards";
import Results from "./components/Results";
import ChatBox from "./components/ChatBox";

const App = () => {
  const [show, setShow] = useState(true);
  const [cards, setCards] = useState([]);

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
        }, 3000);
      }
      setCards((prevCards) => [...prevCards, card]);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-[#B366FF] justify-center">
      <h1 className="font-bold text-4xl text-white">Kart Oyunu</h1>
      {show && (
        <div className="flex justify-center space-x-8 mt-8">
          {List.map((item) => (
            <Cards key={item.id} item={item} handleCardDraw={handleCardDraw} />
          ))}
        </div>
      )}
      <div className="flex justify-center mt-8 gap-2">
        {cards.length === 4 &&
          cards.map((card) => <Results key={card.id} card={card} />)}
      </div>
      {cards.length === 4 && show === false && <ChatBox cards={cards} />}
    </div>
  );
};

export default App;
