/* eslint-disable react/prop-types */

const Cards = ({ item, handleCardDraw }) => {
  return (
    <div
      key={item.id}
      onClick={() => handleCardDraw(item)}
      className="text-white card text-center p-4 h-72 flex flex-col  items-center justify-between rounded-lg bg-[#1A0033] cursor-pointer hover:bg-opacity-80 transition duration-300 border-4 border-[#9a54e0] hover:border-[#ffff] hover:shadow-lg"
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
    </div>
  );
};

export default Cards;
