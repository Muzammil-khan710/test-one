import React, { useState } from 'react'

const Header = () => {

  const [counter, setCounter] = useState(0);

  const counterCheck = () => { 
    setCounter((prev) => prev + 1) ;
    console.log(counter)
  }


  console.log("clicked")

  return (
    <div>
        <div> This is New text and it will be added some time later</div>
          <h1>{counter}</h1>
          <button onClick={counterCheck}> ++1</button>
          <button onClick={() => setCounter((prev) => prev - 1)}> -1</button>
        <div>also some more text</div>
        <h4>Something more about</h4>
    </div>
  )
}

export { Header };