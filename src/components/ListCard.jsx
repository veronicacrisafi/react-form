import ItemListCard from "./ItemListCard"

export default function ListCard({ tasks, handleClick }) {
    return (
        <div className="container">
            <div className="card col-5 m-auto">
                <div className="card-body">
                    <ul className='list-group mt-5'>
                        {tasks.map((task, i) => (
                            <ItemListCard
                                key={i}
                                task={task}
                                elimina={() => handleClick(i)}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}