import { useState } from 'react'
import './App.css'
import {Bookmark} from 'lucide-react';


function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className="parent">
        <div className="card"> </div>
          <div className="top"></div>
            <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt="" />
            <button>Save <Bookmark /></button>
          <div className="center"></div>
          <div className="bottom"></div>
        </div>
  )
}

export default App
