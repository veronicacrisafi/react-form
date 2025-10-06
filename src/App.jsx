import { useState } from 'react'


function App() {
  const [list, setlist] = useState('');
  const [tasks, setTasks] = useState(['studiare react', 'studiare JavaScript', 'studiare CSS']);

  function handleSubmit(e) {
    e.preventDefault()
    console.log('prova del submit');

  }



  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={list} onChange={(e) => setlist(e.target.value)} placeholder='scrivi la tua lista' />
        <button type='submit'>Add task</button>
      </form>
      <ul>
        {tasks.map((task, i) => {
          return (
            <li key={i}>{task}</li>

          )
        })}
      </ul>

    </>
  )
}

export default App
