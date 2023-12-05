import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api"
import { TaskCard } from "./TaskCard"

const TaskList = ()=> {
    const [ tasks, setTasks ]  = useState([])

    useEffect(()=> {
        const loadTasks = async()=> {
            const response = await getAllTasks()
            setTasks(response.data)
        }
        loadTasks()
    }, [])

    return (
        <div>
            {
                tasks?.map((task)=> (
                    <TaskCard key={task.id} task={task} />
                ))
            }
        </div>
    )
}

export default TaskList