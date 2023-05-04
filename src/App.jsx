/* eslint-disable no-unused-vars */

import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import List from "./constants/List";
import Cards from "./components/Cards";
import Results from "./components/Results";
import ChatBox from "./components/ChatBox";
import FlipCard from "./../public/audio/flipcard.mp3";
import useCardStore from "./zustand/cardStore";
import useUserStore from "./zustand/userStore";
import axios from "axios";

const Home = () => {
  const userData = useUserStore((state) => state.user);
  const addToCards = useCardStore((state) => state.addToCards);
  const cards = useCardStore((state) => state.cards);
  const [show, setShow] = useState(true);
  const flipCardAudio = new Audio(FlipCard);

  const handleCardDraw = async (item) => {
    const randomCard = Math.floor(Math.random() * 52) + 1;
    const randomPosition = Math.random() < 0.5 ? "dik" : "yatay";
    const card = {
      id: randomCard,
      name: item.name,
      position: randomPosition,
      number: randomCard,
      icon: item.name,
    };
    const newCard = {
      ...card,
      userId: userData._id,
    };

    console.log("newCard", newCard);

    if (cards.filter((card) => card.name === item.name).length < 1) {
      if (cards.length === 3) {
        setTimeout(() => {
          setShow(false);
        }, 4000);
      }
      toast.success(`${item.name} kartını çektin!`);
      addToCards(card);
      flipCardAudio.play();
    } else {
      toast.error(`${item.name} kartını zaten çektiniz!`);
    }
    try {
      const response = await axios.post(
        `http://localhost:3000/api/users/card/${userData._id}`,
        newCard
      );
      console.log("postResponse", response.data);
    } catch (error) {
      console.log("postError", error);
      toast.error("İstek gönderilirken bir hata oluştu");
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
      {cards.length === 4 && show === false && <ChatBox cards={cards} />}
      <ToastContainer />
    </div>
  );
};

export default Home;
