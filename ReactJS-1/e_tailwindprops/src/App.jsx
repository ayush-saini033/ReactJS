import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Ayush",
    age: 20
  }

  let arr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    {/* <Card channel="chaiaurcode" someobj={myObj} other={arr}/> */}
    <Card username="Chai Aur Code" btnText="CLick me"/>
    <Card username="Hitesh" btnText="Visit me"/>
    </>
  )
}

export default App
