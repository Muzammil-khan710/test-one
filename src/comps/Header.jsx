import React, { useState } from 'react'

const Header = () => {

  const [counter, setCounter] = useState(0);

  const counterCheck = () => { 
    setCounter((prev) => prev + 1) ;
    console.log(counter)
  }

  const counterCheckDecrem = () => { 
    setCounter((prev) => prev - 1) ;
    console.log(counter)
  }

  console.log("clicked")

  return (
    <div>
        <div> This is New text and it will be added some time later</div>
          <h1>{counter}</h1>
          <button onClick={counterCheck}> ++1</button>
          <button onClick={counterCheckDecrem}> -1</button>
        <div>also some more text</div>
    </div>
  )
}

export { Header };