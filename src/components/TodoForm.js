import React from 'react'; 
const generateUniqueId = require('generate-unique-id');

export default function TodoForm(props){
    const id = generateUniqueId({
        includeSymbols: ['@','#','|'],
        excludeSymbols: ['0']
    });
    const [input,setInput] = React.useState(props.edit ? props.edit.value : ''  );
    const button = props.edit ? "Update Todo" : "Add Todo"
    function handleChange(event){
        setInput(event.target.value); 
    }

    function handleSubmit(event){
        event.preventDefault();

        props.onSubmit(
            {
                id: id,
                text: input,
                isComplete: false
            }
        );
        setInput(""); 
    } 
    
    return(
        <div>
            <form className='todo-form' onSubmit={handleSubmit} >
                <input
                type= "text"
                placeholder='Add a todo'
                value={input}
                name= "text"
                className='todo-input'
                onChange={handleChange}
                autoComplete = "off" 
                />
                <button className='todo-button'>{button}</button>
            </form>
        </div>
    )
}