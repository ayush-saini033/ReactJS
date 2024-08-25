import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
function MyApp(){
  // React can not understand the html 
  // this html is parse into the tree structure (Object)
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)
const anotherUser = "Chai aur react"

const reactElement = React.createElement('a', {href: "https://google.com", target: "_blank"}, "click me to visit google",
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(

    // MyApp() it also work
    // <MyApp />
    // anotherElement
    reactElement
    // <App/>

  
)
