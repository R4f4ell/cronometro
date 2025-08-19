// Formatar milissegundos em mm:ss:cc
export function formatTime(milliseconds) {
  const minutes = String(Math.floor((milliseconds / 60000) % 60)).padStart(2, "0")
  const seconds = String(Math.floor((milliseconds / 1000) % 60)).padStart(2, "0")
  const centiseconds = String((milliseconds / 10) % 100).padStart(2, "0")

  return `${minutes}:${seconds}:${centiseconds}`
}
