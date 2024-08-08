import { useState } from 'react'
import Header from '../../components/Header'
import './Main.css'

function Main() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="main-content">
        <h1>
          Designing the Future, One Pixel at a Time
        </h1>
        <p>
        Greetings! I'm a Web Developer living in Brazil. I favor minimalistic designs with a
        strong passion for low-code as well as user interactions. 🚀
        </p>
        <button>
          Entrar em contato
        </button>
      </div>
      
    </>
  )
}

export default Main
