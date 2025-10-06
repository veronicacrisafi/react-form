import { useState } from 'react'
import ListCard from './components/ListCard';


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

      <ListCard handleSubmit={handleSubmit}
        list={list}
        setList={setList}
        tasks={tasks}
        handleClick={handleClick}
      />

    </>
  )
}

export default App
