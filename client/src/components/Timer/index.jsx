import React, { useEffect} from 'react'
import { useData } from '../../contexts'

export default function index() {
    // 25 minutes is initialised in seconds
    const {time, setTime} = useData()


    useEffect(() => {

        // setInterval invokes the function to decrement the timer every second 
        const timer = setInterval(()=> { setTime(time - 1)}, 1000)

        // Clear the interval when the component is unmounted
        return () => 
        clearInterval(timer)
        }, [])


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
