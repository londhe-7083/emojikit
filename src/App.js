import React,{useState} from 'react'
import "./App.css"

function App() {

  const [emoji, setEmoji] = useState("🏆")
  return (
    <div className='container'>
      <div className="app-title-container">
        <h3 className='app-title'>😍emoji-kit</h3>
      </div>

      <div className='main-emoji-container'>
        <div className='emoji'>
          {emoji}
        </div>
      </div>

      <div className='emoji-container'>
        <div className='emoji-item' onClick={()=>{setEmoji('🍕')}}>🍕</div>
        <div className='emoji-item' onClick={()=>{setEmoji('🍕')}}>✌️</div>
        <div className='emoji-item' onClick={()=>{setEmoji('🍕')}}>💕</div>
        <div className='emoji-item' onClick={()=>{setEmoji('🍕')}}>🙂</div>
        <div className='emoji-item' onClick={()=>{setEmoji('🍕')}}>😄</div>
      </div>
    </div>
  )
}

export default App