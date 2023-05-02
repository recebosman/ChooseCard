import { useState } from "react";
import PlayingCard from "./components/ui/playingcards/PlayingCard";

const CardGroups = ["Ateş", "Su", "Hava", "Tahta"];

const App = () => {
  const [cards, setCards] = useState([]);

  const handleCardDraw = (groupName) => {
    const card = Math.floor(Math.random() * 52) + 1;
    setCards((prevCards) => [...prevCards, { group: groupName, id: card }]);
  };

  const handleCardDisplay = () => {
    if (cards.length !== 4) {
      return null;
    }

    const groupedCards = {
      Ateş: [],
      Su: [],
      Hava: [],
      Tahta: [],
    };

    cards.forEach((card) => {
      groupedCards[card.group].push(card.id);
    });

    const cardDisplay = CardGroups.map((group, index) => (
      <div key={index} className={`bg-${group.toLowerCase()} p-2`}>
        <h2 className="text-white text-2xl font-bold mb-2">{group}</h2>
        <PlayingCard
          name={cards[index].id}
          key={cards[index].id}
          icon={group.toLowerCase()}
        />
      </div>
    ));

    return <div className="flex justify-center">{cardDisplay}</div>;
  };

  const handleCardSave = () => {
    const cardText = cards
      .map((card) => `${card.group} ${card.id % 13}`)
      .join("\n");
    console.log(cardText);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Playing Card Game</h1>
      <div className="flex justify-center space-x-8">
        {CardGroups.map((group) => (
          <div
            key={group}
            className={`bg-${group.toLowerCase()} text-white text-center p-4 rounded-lg cursor-pointer hover:bg-opacity-80 transition duration-300`}
            onClick={() => handleCardDraw(group)}
          >
            <h2 className="text-2xl font-bold mb-2">{group}</h2>
            <p>Click to draw a card</p>
          </div>
        ))}
      </div>
      <div className="mt-12">{handleCardDisplay()}</div>
      <div className="mt-8">
        {cards.length === 4 && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCardSave}
          >
            Save Cards
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
