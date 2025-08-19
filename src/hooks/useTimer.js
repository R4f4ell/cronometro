// Hook responsável pela lógica do cronômetro
// Ele controla o tempo em milissegundos e os estados de start/stop/reset
import { useCallback, useEffect, useRef, useState } from "react"

export function useTimer(intervalMs = 10) {
  const [ms, setMs] = useState(0) // tempo em ms
  const [running, setRunning] = useState(false) // status se tá rodando
  const intervalRef = useRef(null) // guarda referência do setInterval

  // iniciar
  const start = useCallback(() => {
    if (intervalRef.current) return // já está rodando
    setRunning(true)
    intervalRef.current = setInterval(() => {
      setMs((prev) => prev + intervalMs)
    }, intervalMs)
  }, [intervalMs])

  // parar
  const stop = useCallback(() => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setRunning(false)
  }, [])

  // zerar
  const reset = useCallback(() => {
    stop()
    setMs(0)
  }, [stop])

  // limpa intervalo quando desmontar
  useEffect(() => () => stop(), [stop])

  return { ms, running, start, stop, reset }
}