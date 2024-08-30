import React, { useContext } from 'react'
import { TeamNames } from "../NameContext";

export default function functionWinModal  ()  {
    const {openWinModal, setOpenWinModal} = useContext(TeamNames)
  return (
    <div  className='fixed w-full h-full z-10 top-0 left-0  rounded-lg text-center'>
        <div className="bg-white pb-10 pt-10 w-[80%] mx-auto my-[15%] px-10 border-blue-500 border-2 rounded-lg">
        <h1 className='font-bold text-xl'>Set Finished!</h1>
        <p className='font-bold text-2xl pb-2'> <span className='text-blue-700'>Team B</span> won the set!😊</p>
        <button  className="bg-blue-700  mt-4 py-3 px-10 text-white font-bold rounded-md" onClick={setOpenWinModal(false)}>Continue Game</button>
    </div>
    </div>
    
  )
}
 