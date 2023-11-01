import React, { useEffect, useState} from 'react'
import { useData } from '../../contexts'

export default function index() {
    const [time, setTime] = useState(0.1*50) 
    const { breakLength } = useData()

    console.log(breakLength) 

    useEffect(() => {
      let timer ;
        
        if (time >= 0){
          timer = setInterval(()=> { setTime((prevTime) => prevTime -1)}, 1000)
        } else {
          setTime(breakLength) // 5 mins
        }

        // ? If no break time is set the session still runs 
        
        // Clear the interval when the component is unmounted
        return () => 
        clearInterval(timer)
        }, [time])

    const formatTime = seconds => {
        // Get the minutes e.g. 120/60 = 2mins
        const minutes = Math.floor(seconds/60)

        // Calculate the remainder when seconds is divided by 60 e.g. 120/60 = remainder of 0
        const remainingSeconds = seconds % 60

        // Formatting the time as mm:ss
        // If seconds is less then 10 it will add a 0 before the number
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
    }

  return (
    <>
      <p>{formatTime(time)}</p>
    </>

  )
}
