import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import useUserStore from "../zustand/userStore";

const ResultTable = () => {
  const [userCards, setUserCards] = useState([]);
  const [show, setShow] = useState(false);
  const [updateCard, setUpdateCard] = useState({ name: "" });
  const user = useUserStore((state) => state?.user);

  const fetchCards = async () => {
    try {
      const response = await axios
        .get(`http://localhost:3000/api/users/card/${user._id}`)
        .then((res) => res.data);
      setUserCards(response);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleCardDelete = async (card) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/users/card/${user._id}/cards/${card._id}`
      );
      console.log("deleteResponse", response.data);
    } catch (error) {
      console.log("deleteError", error);
    }
  };

  const handleCardUpdate = async (card) => {
    try {
      const updatedCard = { ...card, name: updateCard.name };
      const response = await axios.put(
        `http://localhost:3000/api/users/card/${user._id}/cards/${userCards._id}`,
        updatedCard
      );

      console.log("updateResponse", response.data);
    } catch (error) {
      console.log("updateError", error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, [fetchCards, userCards]);

  return (
    <>
      {userCards.length === 0 && (
        <h1 className="text-6xl">
          Kartınız yoktur lütfen kart oyununa gidiniz
          <Link to="/game">
            <button className="btn bg-red-600 ml-2">Kart Oyunu</button>
          </Link>
        </h1>
      )}
      {userCards.map((card, index) => (
        <div key={index} className="overflow-x-auto ">
          <table className="table  w-96 ">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>position</th>
                <th>icon</th>
                <th>tls</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{card.number}</th>
                <td>
                  {show ? (
                    <div>
                      <input
                        type="text"
                        value={updateCard.name}
                        onChange={(e) => setUpdateCard(e.target.value)}
                      />
                      <button onClick={handleCardUpdate}>Update</button>
                    </div>
                  ) : (
                    card.name
                  )}
                </td>
                <td>{card.position}</td>
                <td>
                  {card.name === "Ateş" && "🔥"}
                  {card.name === "Su" && "💧"}
                  {card.name === "Hava" && "💨"}
                  {card.name === "Tahta" && "🌱"}
                </td>
                <td className="flex items-center gap-2 bg-black p-2">
                  <span>
                    <svg
                      onClick={() => handleCardDelete(card)}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                    >
                      <path
                        d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
                        fill="rgba(251,231,231,1)"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      onClick={() => setShow(!show)}
                    >
                      <path
                        d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"
                        fill="rgba(28,26,126,1)"
                      ></path>
                    </svg>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
};

export default ResultTable;
