interface ClockProps {
  counting: boolean
  elapsedTime: number
  toggleCounting: (arg: boolean) => void
  setElapsedTime: (arg: number) => void
  currentFormattedTime: string
}

const Clock = ({ counting, elapsedTime, toggleCounting, setElapsedTime, currentFormattedTime }: ClockProps): React.ReactElement => (
  <>
    <h1>Pomodorino Timer</h1>
    <p>Time is {currentFormattedTime}</p>
    <p>{counting ? `Elapsed time is ${elapsedTime}` : 'Timer is stopped'}</p>
    <button onClick={() => {
      toggleCounting(!counting)
      setElapsedTime(0)
    }}>
      Toggle
    </button>
  </>
)

export default Clock
