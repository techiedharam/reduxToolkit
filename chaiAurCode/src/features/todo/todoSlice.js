import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), text: "Hello Todo !" }]
}

export const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(newTodo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload
      })
    } ,
    editTodo:(state,action)=>{
      const {id,text} = action.payload
      const todo = state.todos.find((todo)=>todo.id === id)
      if(todo){
        todo.text = text
      }
    },
  } ,
})


export const { addTodo, removeTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;