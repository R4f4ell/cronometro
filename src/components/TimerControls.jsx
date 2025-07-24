const TimerControls = ({ timerOn, onStart, onStop, onReset, onLap }) => {
  return (
    <div className="timer-controls">
      {/* Botão iniciar */}
      {!timerOn && <button onClick={onStart} aria-label="Iniciar o cronômetro">Iniciar</button>}

      {/* Botão parar */}
      {timerOn && <button onClick={onStop} aria-label="Parar o cronômetro">Parar</button>}

      {/* Botão volta */}
      {timerOn && <button onClick={onLap} aria-label="Registrar volta">Volta</button>}

      {/* Botão zerar */}
      <button onClick={onReset} aria-label="Zerar o cronômetro">Zerar</button>
    </div>
  )
};

export default TimerControls;