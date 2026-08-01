import tasksAPI from "../api/tasksAPI"
import { useEffect,useState } from "react"

const TaskPage=(props)=>{
    const{params}=props
const taskId=params.id

const [task,setTask]=useState(null)
const [isLoading, setIsLoading]=useState(true)
const [hasError, setHasError]=useState(false)

useEffect(()=>{
tasksAPI.getById(taskId).then((taskData)=>{
    setTask(taskData)
    setHasError(false)
})
.catch(()=>{
     console.error("Ошибка при получении задачи:", error)
    setHasError(true)
})
.finally(()=>{
    setIsLoading(false)
})
},[])

if(isLoading){
    return <div>Loading...</div>
}

if(hasError){
    return<div>Task not found!</div>
}

    return(
        <div>
            <h1>{task.title}</h1>
            <p>{task.isDone?'Task is complete':'Task is not complete'}</p>
        </div>
    )
}

export default TaskPage