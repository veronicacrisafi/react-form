import { useState } from 'react'
import ListCard from './components/ListCard';
import NewItemForm from './components/NewItemForm';


function App() {



  function addTask(newTask) { setTasks([...tasks, newTask]) }
  const [tasks, setTasks] = useState(['studiare react', 'studiare JavaScript', 'studiare CSS']);

  function handleClick(i) {
    const taskFiltrate = tasks.filter((task, index) => index != i)
    setTasks(taskFiltrate)

  }



  return (
    <>
      <div className='container'>
        <h1>To Do List</h1>
        <div className='card'>
          <div className="card-body">
            <NewItemForm addTask={addTask} />

            <ListCard handleClick={handleClick}
              tasks={tasks}
            />

          </div>
        </div>
      </div>

    </>
  )
}

export default App
