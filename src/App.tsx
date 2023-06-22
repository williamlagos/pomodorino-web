import { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import './App.css'

function App() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000)
  }, []);

  return (
    <>
      <h1>Pomodorino Timer</h1>
      <p>Time is {dayjs(time).format("HH:mm:ss")}</p>
    </>
  )
}

export default App
