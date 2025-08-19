import { useState } from "react"
import { useTimer } from "../hooks/useTimer"
import { formatTime } from "../utils/formatTime"

import TimerControls from "./TimerControls"
import TimerDisplay from "./TimerDisplay"
import LapList from "./LapList"

import "./timer.scss"

export default function Timer() {
  const { ms, running, start, stop, reset } = useTimer() // hook do cronômetro
  const [laps, setLaps] = useState([]) // lista de voltas

  // adiciona volta formatada
  const addLap = () => setLaps((prev) => [...prev, formatTime(ms)])

  // reseta cronômetro e limpa voltas
  const resetAll = () => {
    reset()
    setLaps([])
  }

  return (
    <section className="timer-container" role="region" aria-label="Cronômetro">
      {/* Mostra o tempo atual formatado */}
      <TimerDisplay time={formatTime(ms)} />

      {/* Botões de controle */}
      <TimerControls
        timerOn={running}
        onStart={start}
        onStop={stop}
        onReset={resetAll}
        onLap={addLap}
      />

      {/* Lista de voltas */}
      <LapList laps={laps} />
    </section>
  )
}