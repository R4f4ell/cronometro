export default function TimerDisplay({ time }) {
  return (
    <output 
      className="timer-display"
      role="timer" 
      aria-live="polite"
    >
      {time}
    </output>
  )
}