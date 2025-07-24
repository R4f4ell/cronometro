import React, { useState, useEffect } from 'react';

import TimerControls from './TimerControls';
import TimerDisplay from './TimerDisplay';
import LapList from './LapList';

import './timer.scss'

const Timer = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [laps, setLaps] = useState([]);

  // Controla o início/parada do cronômetro baseado em timerOn
  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = startTimer(interval);
    } else if (!timerOn) {
      interval = stopTimer(interval);
    }
    return () => stopTimer(interval);
  }, [timerOn]);

   // Inicia o cronômetro
  const startTimer = (interval) => {
    return setInterval(() => {
      setMilliseconds(prevMilliseconds => prevMilliseconds + 10);
    }, 10);
  };

   // Para o cronômetro
  const stopTimer = (interval) => {
    clearInterval(interval);
    return interval;
  };

  // Reinicia cronômetro e limpa voltas
  const resetTimer = () => {
    setMilliseconds(0);
    setTimerOn(false);
    setLaps([]);
  }

  // Adiciona uma volta formatada à lista
  const addLap = () => {
    setLaps([...laps, formatTime()]);
  };

  // Formata o tempo total em mm:ss:cc
  const formatTime = () => {
    const minutes = ("0" + Math.floor((milliseconds / 60000) % 60)).slice(-2);
    const seconds = ("0" + Math.floor((milliseconds / 1000) % 60)).slice(-2);
    const centiseconds = ("0" + ((milliseconds / 10) % 100)).slice(-2);

    return `${minutes}:${seconds}:${centiseconds}`;
  };

  return (

    <section className="timer-container">
      {/* Exibição do tempo atual */}
      <TimerDisplay time={formatTime()} />

      {/* Botões de controle do cronômetro */}
      <TimerControls
        timerOn={timerOn}
        onStart={() => setTimerOn(true)}
        onStop={() => setTimerOn(false)}
        onReset={resetTimer}
        onLap={addLap}
      />

      {/* Lista de voltas registradas */}
      <LapList laps={laps} />
      
    </section>

  );
};

export default Timer;