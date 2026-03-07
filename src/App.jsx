import { useState } from 'react'
import Lab1 from './pages/Lab1'

export default function App() {

  const [page,setPage] = useState(null)

  if(page === "lab1"){
    return (
      <div>
        <div className="p-4 bg-stone-200 flex justify-between">
          <button
            onClick={()=>setPage(null)}
            className="bg-stone-700 text-white px-4 py-2 rounded-lg"
          >
            חזרה לתפריט
          </button>
          <div className="font-bold">עבודה 1</div>
        </div>

        <Lab1/>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-orange-50 p-10 text-center">

      <h1 className="text-4xl font-bold mb-10">
        מאגר עבודות בביולוגיה
      </h1>

      <button
        onClick={()=>setPage("lab1")}
        className="bg-white border shadow p-6 rounded-xl text-xl"
      >
        עבודה 1 – פעילות אנזים קטלאז
      </button>

    </div>
  )
}
