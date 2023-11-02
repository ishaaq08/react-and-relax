import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function index() {
    const navigate = useNavigate()

    function handleClick(){
        navigate("/games")
    }

  return (
    <div className="flex items-center justify-center">
        <button className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
        Exit Game
        </button>
    </div>
  )
}
