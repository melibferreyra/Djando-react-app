import { useForm } from 'react-hook-form'
import { createTasks } from '../api/tasks.api'
import { useNavigate } from 'react-router-dom'

const TaskFormPage = ()=> {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigate = useNavigate()
    
    const onSubmit = async(data) => {
        await createTasks(data)
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
        </div>
    )
}

export default TaskFormPage