export default function ItemListCard({ task, elimina }) {

    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span>
                {task}
            </span>
            <button className='btn btn-danger' onClick={elimina}>
                <i className="bi bi-trash3"></i>
            </button>
        </li>
    )
}