import { type ReactElement, useEffect, useState } from 'react'
import d from 'dayjs'
import './App.css'

const App = (): ReactElement => {
  const [startTime] = useState<Date>(new Date())
  const [currentTime, setCurrentTime] = useState<Date>(new Date())

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
  }, [])

  const currentFormattedTime = d(currentTime).format('HH:mm:ss')
  const formattedTimeElapsed = d(d(currentTime).diff(d(startTime))).format('mm:ss')

  return (
    <>
      <h1>Pomodorino Timer</h1>
      <p>Time is {currentFormattedTime}</p>
      <p>Elapsed time is {formattedTimeElapsed}</p>
    </>
  )
}

export default App
