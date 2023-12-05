import { useForm } from 'react-hook-form'
import { createTasks, deleteTasks, updateTask, getTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

const TaskFormPage = ()=> {
    const { 
        register, 
        handleSubmit, 
        setValue,
        formState: { errors } 
    } = useForm()

    const navigate = useNavigate()
    const params = useParams()

    useEffect(()=> {
        const loadTask = async()=> {
            if(params.id) {
                const { data } = await getTask(params.id)
                setValue('title', data.title)
                setValue('description', data.description)
            }
        }
        loadTask()
    }, [])
    
    const onSubmit = async(data) => {
        if(params.id) {
            await updateTask(params.id, data);
        }
        else {
            await createTasks(data)
        }
        navigate('/tasks')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="text" 
                    placeholder="Title"
                    {...register('title', { required: true })}
                />
                    {errors.title && <span>This field is required</span>}
                <textarea 
                    rows="3"
                    placeholder="Description" 
                    {...register('description', { required: true })}
                />
                    {errors.description && <span>This field is required</span>}
                <button type="submit">Save</button>
            </form>
            {
                params.id && (
                    <buttom
                        onClick={ async()=> {
                            const accepted = window.confirm('Are you sure you want to delete this task?')
                            if(accepted) {
                                await deleteTasks(params.id)
                                navigate('/tasks/')
                            }
                        }}
                    > 
                        Delete 
                    </buttom>
                )
            }
        </div>
    )
}

export default TaskFormPage