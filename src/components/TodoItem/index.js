// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, DeleteItems} = props
  const {title, id} = todoItem

  const DeletePara = () => {
    DeleteItems(id)
  }

  return (
    <li className="list-ordered">
      <p className="todo-heading">{title}</p>
      <div className="btn-div">
        <button className="btn" type="button" onClick={DeletePara}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
