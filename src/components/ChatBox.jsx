/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ChatBox = ({ cards }) => {
  const [show, setShow] = useState(false);
  const [help, setHelp] = useState(false); // eslint-disable-line no-unused-vars
  const [wrong, setWrong] = useState(false); // eslint-disable-line no-unused-vars
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "Benim kartlarım ne ?") {
      setShow(true);
    } else if (input === "Kartlarımı kaydet") {
      navigate("/result-table");
    } else if (input === "Yardım") {
      setShow(false);
      setHelp(true);
    } else {
      setShow(false);
      setWrong(true);
      setTimeout(() => {
        setWrong(false);
      }, 3000);
      toast.error("Lütfen geçerli bir komut giriniz!");
    }
    setInput("");
  };

  return (
    <div className="w-1/3 h-screen mt-12">
      <div className=" rounded-3xl flex p-2 justify-between flex-col h-96 bg-[#1A0033] shadow-xl border-4 border-[#9a54e0]">
        <h1 className="text-white text-center font-bold mt-4">Chat Box</h1>
        <div className="chat chat-start">
          <div className="chat-bubble">
            {
              "Welcome to the chat! You can ask me about your cards by typing 'Benim kartlarım ne ?' and you can save your cards by typing 'Kartlarımı kaydet' "
            }
          </div>
        </div>

        {show && (
          <div className="chat chat-end">
            <div className="chat-bubble">
              Your card list is <br />
              {cards.map((card, index) => (
                <ul key={index}>
                  <li>
                    {card.name} {card.position === "dik" ? " Dik" : " Yatay"}{" "}
                    {card.id}
                    {index === 3 ? "" : ","}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        )}
        {help && (
          <div className="chat chat-end">
            <div className="chat-bubble">
              Kartlarınız hakkında bilgi almak için "Benim kartlarım ne ?"
              yazabilirsiniz. Kartlarınızı kaydetmek için "Kartlarımı kaydet"
              başka bir kelime yazdınızda herhangi bir bildirim alamazsınız.
            </div>
          </div>
        )}
        {wrong && (
          <div className="chat chat-end">
            <div className="chat-bubble">
              Lütfen geçersiz bir komut girmeyiniz. Geçerli komutlar için
              "Yardım" yazabilirsiniz.
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input w-full mt-2"
          />
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
