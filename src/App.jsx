import { useState } from "react"
import Lab1 from "./pages/Lab1"
import Lab2 from "./pages/Lab2"

export default function App() {

  const [page, setPage] = useState(null)

  if(page === "lab1"){
    return (
      <div>
        <button
          onClick={()=>setPage(null)}
          style={{margin:20,padding:10}}
        >
          חזרה לתפריט
        </button>

        <Lab1/>
      </div>
    )
  }

  if(page === "lab2"){
    return (
      <div>
        <button
          onClick={()=>setPage(null)}
          style={{margin:20,padding:10}}
        >
          חזרה לתפריט
        </button>

        <Lab2/>
      </div>
    )
  }

  return (
    <div style={{padding:40,fontFamily:"Rubik",direction:"rtl"}}>

      <h1>עבודות ביולוגיה</h1>

      <div style={{display:"flex",gap:20,marginTop:30}}>

        <button
          onClick={()=>setPage("lab1")}
          style={{padding:15,fontSize:18}}
        >
          עבודה 1 – פעילות קטלאז
        </button>

        <button
          onClick={()=>setPage("lab2")}
          style={{padding:15,fontSize:18}}
        >
          עבודה 2
        </button>

      </div>

    </div>
  )
}
