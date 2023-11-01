import React, { useEffect, useState} from 'react'
import { useData } from '../../contexts'

export default function index() {
    const [time, setTime] = useState(0.1*50) 
    const { breakLength } = useData()
    const {session, setSession} = useData()

    useEffect(() => {
      let timer ;

        if (time >= 0){
          timer = setInterval(()=> { setTime((prevTime) => prevTime -1)}, 1000)
        } else {
          setTime(breakLength) // 5 mins
          setSession((prevSession) => prevSession + 1)
        }
   
        return () => 
        clearInterval(timer)
        }, [time])

    const formatTime = seconds => {
        const minutes = Math.floor(seconds/60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
    }

  return (
    <>
      <p>{formatTime(time)}</p>
    </>

  )
}
