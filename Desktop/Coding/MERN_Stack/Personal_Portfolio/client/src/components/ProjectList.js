import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'

export default props => {
    const {deleted, setDeleted } = props;
    const deleteProject = (projectId) => {
        axios.delete('http://localhost:8000/api/project/delete/' + projectId)
            .then(res => {
                setDeleted(!deleted)
            })
    }
    return (
        <>
        <div>
            {props.projects.map((project, idx)=>{
                return <p key={idx}>{project.title}
                <button><Link to={`/projects/${project._id}`}>Edit</Link></button> 
                <button onClick={(e)=>{deleteProject(project._id)}}>
                    Delete
                </button></p>
            })}
        </div>
        </>
    )
}
