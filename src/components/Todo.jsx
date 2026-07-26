import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchtaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"
const Todo = () => {
const tasks=[
    {id:'task-1',title:'Buy milk', isDone:false},
    {id:'task-2',title:'Play with cat', isDone:true}
]

const deleteAllTasks=()=>{
    console.log('Delete all')
}

const deleteTask=(taskId)=>{
console.log(`Delete with id: ${taskId}`)
}

const toggleTaskComplete=(taskId,isDone)=>{
console.log(`Task ${taskId} ${isDone?'is complete':'is not complete'}`)
}

const filterTasks=(query)=>{
    console.log(`Search: ${query}`)
}

const addTask=()=>{
    console.log("Task adds")
}

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm addTask={addTask}/>
            <SearchTaskForm onSearchInput={filterTasks}/>
            <TodoInfo 
            total={tasks.length}
            done={tasks.filter(({isDone})=>isDone).length}
            onDeleteAllButtonClick={deleteAllTasks}/>
            <TodoList 
            tasks={tasks}
            onDeleteTaskButtonClick={deleteTask}
            onTaskCompleteChange={toggleTaskComplete}
            />

        </div>
    )
}

export default Todo