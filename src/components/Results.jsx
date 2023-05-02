/* eslint-disable react/prop-types */
const Results = ({ card }) => {
  return (
    <div className="card w-96 bg-[#1A0033] shadow-xl border-4 border-[#9a54e0] rounded-lg hover:border-white hover:opacity-80">
      <figure>
        <img
          src={card.icon}
          alt={card.name}
          className="w-32 h-32 object-contain mx-auto mt-12"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Tür: {card.name}</h2>
        <p className="capitalize">Position: {card.position}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"> Card Number: {card.id}</button>
        </div>
      </div>
    </div>
  );
};

export default Results;
