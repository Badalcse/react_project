import { useState, useCallback} from "react"


function App() {
  const [lenth, setLenth] = useState(8)
  const [numberAllow, setNumberAloow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword]= useState("") 
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let srt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str += "0123456789"
    if(charAllow) str += "@#$%^&*{}[]_+!"
    for(let i = 0; i<= Array.length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
    password(pass)

  }, [lenth,numberAllow,charAllow,setPassword])

  return (
     
     <>
     
     <div className="w-64  max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">test</div>
     <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input className="w-64  max-w-md mx-auto shadow-md rounded-lg px-4 my-8"
      value={password}
      
      placeholder="password" 
      readOnly
       />
     </div>
     </>
  )
}

export default App
