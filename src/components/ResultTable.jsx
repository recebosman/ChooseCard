/* eslint-disable react/prop-types */
const ResultTable = ({ card }) => (
  <h1>
    {card.map((card, index) => (
      <div key={index} className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>position</th>
              <th>icon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{card.id}</th>
              <td>{card.name}</td>
              <td>{card.position}</td>
              <td>
                <img src={card.icon} alt="icon" className="w-4 h-4" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ))}
  </h1>
);

export default ResultTable;
