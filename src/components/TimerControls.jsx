export default function TimerControls({ timerOn, onStart, onStop, onReset, onLap }) {
  return (
    <div className="timer-controls">
      {/* aparece "Iniciar" quando não tá rodando */}
      {!timerOn && <button onClick={onStart} aria-label="Iniciar o cronômetro">Iniciar</button>}

      {/* se tiver rodando, mostra "Parar" */}
      {timerOn && <button onClick={onStop} aria-label="Parar o cronômetro">Parar</button>}

      {/* só dá pra marcar volta enquanto tá rodando */}
      {timerOn && <button onClick={onLap} aria-label="Registrar volta">Volta</button>}

      {/* reset só aparece quando já iniciou */}
      {timerOn && <button onClick={onReset} aria-label="Zerar o cronômetro">Zerar</button>}
    </div>
  )
}