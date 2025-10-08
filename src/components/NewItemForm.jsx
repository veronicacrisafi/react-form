import { useState } from "react"
export default function NewItemForm({ }) {
    const [list, setList] = useState('');
    function handleSubmit(e) {
        e.preventDefault()
        setTasks([...tasks, list]);
        setList('')
    }

    return (
        <form onSubmit={handleSubmit} className='d-flex align-items-center'>
            <div>
                <input className='form-control' type="text" value={list} onChange={(e) => setList(e.target.value)} placeholder='scrivi la tua lista' />
            </div>
            <button className='btn btn-dark ms-5' type='submit'>Add task</button>
        </form>
    )
}