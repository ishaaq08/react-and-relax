import React from 'react'
import { useData } from '../../contexts'

export default function index() {

    const {breakLength, setBreakLength} = useData()

    function handleClickShort(e){
        e.preventDefault()
        setBreakLength("5 Minute Break")
    }

    function handleClickLong(e){
        e.preventDefault()
        setBreakLength("10 Minute Break")
    }

  return (
    <>
        <form action="">
            <h2>Testing the Break Length Setter</h2>
            <button onClick={handleClickShort}>Short Break</button>
            <button onClick={handleClickLong}>Long Break</button>
            <p>{breakLength}</p>
        </form>
    </>
  )
}
