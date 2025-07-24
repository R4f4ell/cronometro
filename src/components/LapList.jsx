const LapList = ({ laps }) => {
  return (
    <div className="timer-laps">
      <h3>Voltas:</h3> {/* Título da lista de voltas */}

      {/* Lista ordenada de voltas */}
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Volta {index + 1}: {lap}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default LapList;