const LapList = ({ laps }) => {
  if (laps.length === 0) return null // se não tiver volta, não mostra nada

  return (
    <div className="timer-laps">
      <h3>Voltas</h3>
      <ol>
        {laps.map((lap, index) => (
          <li key={index}>
            Volta {index + 1}: {lap}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default LapList