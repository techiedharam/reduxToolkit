import React ,{useState} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { removeTodo, editTodo } from '../../features/todo/todoSlice'
function Todos() {
    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch()
    const [editingId, setEditingId] = useState(null)
    const [editingText, setEditingText] = useState('')

    const startEditing = (todo) => {
        setEditingId(todo.id)
        setEditingText(todo.text)
    }

    const saveEdit = () => {
        if (editingId !== null) {
            dispatch(editTodo({ id: editingId, text: editingText }))
            setEditingId(null)
            setEditingText('')
        }
    }

    const cancelEdit = () => {
        setEditingId(null)
        setEditingText('')
    }
  return (
    <div>
        <h1>Todos</h1>
        {todos.map((todo) => (  
            <div key={todo.id}>
                {editingId === todo.id ? (
                    <div>
                        <input type="text" placeholder='Edit Todo' value={editingText} onChange={(e) => setEditingText(e.target.value)} />
                        <button onClick={saveEdit}>Save</button>
                        <button onClick={cancelEdit}>Cancel</button>
                    </div>
                ) : (
                    <div>
                        <h2>{todo.text}</h2>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                        <button onClick={() => startEditing(todo)}>Edit</button>
                    </div>
                )}
            </div>
        ))}
    </div>  
  )
}

export default Todos;