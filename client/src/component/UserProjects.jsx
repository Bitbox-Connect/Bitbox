import { useContext, useEffect } from 'react'
import projectContext from '../context/projectContext';
import UserProjectItem from './UserProjectItem';

const UserProjects = () => {
    const context = useContext(projectContext)
    const { projects, getUserProjects } = context;
    useEffect(() => {
        getUserProjects();
    }, [])

    return (
        <div className='container'>
            <h2 className='text-center mb-4 mt-2'>Your Projects</h2>
            <div className='row my-3'>
                {projects.map((project) => {
                    return <UserProjectItem key={project._id} project={project} />;
                })}
            </div>
        </div>
    )
}

export default UserProjects
