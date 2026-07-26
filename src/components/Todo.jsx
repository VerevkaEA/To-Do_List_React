import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchtaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"
const Todo = () => {
const tasks=[
    {id:'task-1',title:'Buy milk', isDone:false},
    {id:'task-2',title:'Play with cat', isDone:true}
]

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm />
            <SearchTaskForm />
            <TodoInfo 
            total={tasks.length}
            done={tasks.filter(({isDone})=>isDone).length}/>
            <TodoList tasks={tasks}/>

        </div>
    )
}

export default Todo