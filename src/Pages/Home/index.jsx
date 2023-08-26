import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function HomePage() {
  const[roomCode,setRoomcode]=useState('');
  const navigate=useNavigate()
  const handleFormSubmit=(ev)=>{
    ev.preventDefault();
    navigate(`/room/${roomCode}`)
  }
  return (
    <div className='home-page' onSubmit={handleFormSubmit}>
        <form className='form' pnSubmit>
           <div>
              <label>Enter Room Code</label>
              <input value={roomCode }
               onChange={e=>setRoomcode(e.target.value)}
                type="text"
                 required placeholder='Enter Room Code'/>
              </div>
              <button type='submit'>Enter Room</button>
        </form>
    
    
    </div>
  )
}

export default HomePage