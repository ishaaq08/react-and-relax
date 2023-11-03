import React, { useEffect, useState} from 'react'
import { useData } from '../../contexts'

export default function index() {
    const [time, setTime] = useState(45) // SET BACK TO 25 * 60 (25 MINS) AFTER DEMO
    const { breakLength } = useData()
    const {session, setSession} = useData()

    useEffect(() => {
      let timer;
      if (time > 0) {
        timer = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
      } else {
        setSession((prevSession) => prevSession + 1);
  
        if ((session +1) % 2 !== 0) {
          setTime(0.2 * 60)
        } else {
          setTime(breakLength)
        }
      }
  
      return () => clearInterval(timer);
    }, [time, session, setSession, breakLength]);


    const formatTime = seconds => {
      const minutes = Math.floor(seconds/60)
      const remainingSeconds = seconds % 60
      return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
    }

  return (
    <>
      <p className='tracking-widest text-2xl'>{formatTime(time)}</p>
    </>

  )
}
