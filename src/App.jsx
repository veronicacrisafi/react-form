import { useState } from 'react'


function App() {
  const [list, setlist] = useState('')

  return (
    <>
      <h1>To Do List</h1>
      <form>

        <input type="text" value={list} onChange={(e) => setlist(e.target.value)} placeholder='scrivi la tua lista' />
        <button>Add task</button>
        <ul>
          <li></li>
        </ul>

      </form>
    </>
  )
}

export default App
