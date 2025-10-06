import ItemListCard from "./ItemListCard"

export default function ListCard({ handleSubmit, list, setList, tasks, handleClick }) {

    return (

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

                                <ItemListCard
                                    key={i}
                                    task={task}
                                    elimina={() => handleClick(i)}

                                />

                            )
                        })}
                    </ul>
                </div>
            </div>
        </div >

    )
}