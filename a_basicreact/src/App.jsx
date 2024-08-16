import Chai from "./Chai"

function App() {
  // expression
  const username = "Tea the legend"
  return (
    // fragment
      <>
      <Chai/>
      {/* evaluated expression */}
      <h1>My name is {username}</h1>
      </>
  )
}

export default App
