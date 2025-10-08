import { useState } from 'react'
import ListCard from './components/ListCard';
import NewItemForm from './components/NewItemForm';


function App() {


  const [tasks, setTasks] = useState(['studiare react', 'studiare JavaScript', 'studiare CSS']);



  function handleClick(i) {
    const taskFiltrate = tasks.filter((task, index) => index != i)
    setTasks(taskFiltrate)

  }


  return (
    <>
      <div className='container'>
        <div className='card'>
          <div className="card-body">
            <NewItemForm />

            <ListCard />

          </div>
        </div>
      </div>

    </>
  )
}

export default App
