import { Link } from "react-router-dom"

const Navigation = ()=> {
    return (
        <div>
            <h1>Task App</h1>
            <Link to='/tasks-create'>
                Create task
            </Link>
        </div>
    )
}

export default Navigation