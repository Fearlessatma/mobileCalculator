import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [Name, setName] = useState("")
  const [Name2, setName2] = useState("")
  const [first, setfirst] = useState("0")
 const handlechange=(change)=>{
  setName(change.target.value)
 }
 const handlechange2=(change)=>{
  setName2(change.target.value)
 }
 const clear=()=>{
  setfirst('')
  setName('')
 }
 const sum=()=>{
  let a=eval(Name)
  setfirst(a)
 }

  return (
    <>
    <h3>enter the value=<input type="text" value={Name} onChange={handlechange} /></h3>
    <h1>{first}</h1>
    <button onClick={sum} >result</button>
    <button onClick={clear}>clear</button>
    </>
    
  )
}

export default App
