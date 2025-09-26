import React ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../features/todo/todoSlice'
function AddTodo() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const handleAddTodo = () => {
        console.log(text)
        dispatch(addTodo(text))
        setText('')
    }
    const handleChange = (e) => {
        setText(e.target.value)
        console.log(text)
    }
  return (
    <div>
        <input type="text" placeholder='Add Todo' value={text} onChange={handleChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default AddTodo