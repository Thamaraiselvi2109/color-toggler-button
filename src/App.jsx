import { useReducer, useRef, useState } from "react"

const Button = [
  {
    label: "Button 1",
    default: "gray",
  },
  {
    label: "Button 2",
    default: "gray",
  },
  {
    label: "Button 3",
    default: "gray",
  },
  {
    label: "Button 4",
    default: "gray",
  },
  {
    label: "Button 5",
    default: "gray",
  }
]


function App() {
  const [buttons, setButtons] = useState(Button)

  const handleClick = (index) => {
    const isEven = (index + 1) % 2 === 0;
    console.log(index, isEven)
    if(isEven){
      setButtons((prev) => prev.map((btn, i) => i === index ? ({...btn , default : "yellow"}) : ({...btn , default : "gray"})))
    }else{
      setButtons((prev) => prev.map((btn, i) =>  i === index ? {...btn, default : "green"} : {...btn, default: "gray"}))
    }
  }


  return (
    <>
    <h1 style={{textAlign:"center"}}>Color button toggler</h1>
      {buttons.map((item, index) =>
        <button onClick={() => handleClick(index)} key={index} style={{ background: `${item.default}` }}>{item.label}</button>
      )}
    </>
  )
}

export default App
