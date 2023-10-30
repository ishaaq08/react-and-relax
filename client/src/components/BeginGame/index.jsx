import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useData } from '../../contexts'

export default function index() {

    const {breakLength, beginGameError, setBeginGameError} = useData() 
    const navigate = useNavigate()
    const navigationCondition = breakLength

    function handleClick(e){
        e.preventDefault()

        if(navigationCondition){
            navigate("/games/game1")
        } else {
            setBeginGameError("Please select whether you want a short or long break")
        }
    }

  return (
    <>
        <h2>Testing the begin game button</h2>
        <button onClick={handleClick}>Begin Game</button>
        <p>{beginGameError}</p>
    </>
  )
}
