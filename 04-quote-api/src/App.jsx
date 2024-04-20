import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [quote, setQuote] = useState({})

  const getQuote = async() => {
    const res = await fetch("https://southparkquotes.onrender.com/v1/quotes")
    const quote = await res.json()
    setQuote(quote[0]);
  }
  
  useEffect(()=>{
    getQuote()
  }, [])


  return (
    <div>
      <button onClick={getQuote}>Random Quote</button>
      <h2>{quote.quote}</h2>
      <small>{quote.character}</small>
    </div>
  )
}

export default App
