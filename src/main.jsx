import AnimatedCursor from "react-animated-cursor"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatedCursor
          color='20, 184, 255'
          outerSize={30}
          outerScale={1.5}
          clickables={['span']}
          trailingSpeed={10}
    />
    <App />
  </React.StrictMode>,
)
