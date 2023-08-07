import { type ReactElement, useEffect, useState } from 'react'
import Clock from './Clock'
import d from 'dayjs'
import './App.css'

const App = (): ReactElement => {
  const [startTime, setStartTime] = useState<Date>(new Date())
  const [elapsedTime, setElapsedTime] = useState<number>(0)
  const [counting, toggleCounting] = useState<boolean>(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counting) {
        setElapsedTime(d(new Date()).diff(d(startTime), 's'))
      } else {
        setStartTime(new Date())
      }
    }, 1000)

    return () => { clearInterval(intervalId) }
  }, [counting, startTime])

  // TODO: Remove later, using for time and speed reference
  const currentFormattedTime = d(new Date()).format('HH:mm:ss')

  return (
    <Clock
      counting={counting}
      elapsedTime={elapsedTime}
      setElapsedTime={setElapsedTime}
      toggleCounting={toggleCounting}
      currentFormattedTime={currentFormattedTime}
    />
  )
}

export default App
