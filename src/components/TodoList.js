import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function TodoList(){
    const [todos,setTodos] = React.useState([])

    function addTodo(todo){
        setTodos([todo,...todos])
    }

    function completeTodo(id){
        let updatedTodos = todos.map(todo  => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete; 
            }
            return todo; 
        })
        setTodos(updatedTodos)
    }
    function updateTodo(todoId,newValue){
        setTodos(prev => prev.map(item =>(
            item.id === todoId ? newValue : item
            ) 
        ))
    }
    

    function removeTodo(id){
        let updatedTodos = todos.filter((todo)=>(
            todo.id!==id
        ))
        setTodos(updatedTodos)
    }



    return(
        <div className="todolist-container">
            <h1>What's the plan for today</h1>
            <TodoForm onSubmit= {addTodo}/>
            <Todo todos= {todos} completeTodo = {completeTodo} removeTodo = {removeTodo} updateTodo = {updateTodo}/>
        </div>
    )
}