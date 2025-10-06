import { useState } from 'react'


function App() {
  const [list, setList] = useState('');
  const [tasks, setTasks] = useState(['studiare react', 'studiare JavaScript', 'studiare CSS']);

  function handleSubmit(e) {
    e.preventDefault()
    setTasks([...tasks, list]);
    setList('')
  }

  function handleClick(i) {
    const taskFiltrate = tasks.filter((task, index) => index != i)
    setTasks(taskFiltrate)

  }


  return (
    <>
      <div className="container">
        <div className="card col-5 m-auto">
          <div className="card-body">
            <h1>To Do List</h1>
            <form onSubmit={handleSubmit} className='d-flex align-items-center'>
              <div>
                <input className='form-control' type="text" value={list} onChange={(e) => setList(e.target.value)} placeholder='scrivi la tua lista' />
              </div>
              <button className='btn btn-dark ms-5' type='submit'>Add task</button>
            </form>
            <ul className='list-group mt-5'>
              {tasks.map((task, i) => {
                return (
                  <li key={i} className='list-group-item d-flex justify-content-between'>
                    <span>
                      {task}
                    </span>
                    <button className='btn btn-danger' onClick={() => handleClick(i)}>
                      <i className="bi bi-trash3"></i>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
