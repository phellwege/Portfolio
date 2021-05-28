import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import {navigate} from '@reach/router';
import Logo from "../components/Logo";
import BottomFooter from "../components/BottomFooter"

export default props => {
    const [project, setProject] = useState({})
    const deleteProject = (projectId) => {
        axios.delete('http://localhost:8000/api/project/delete/' + projectId)
            .then(res => {
                navigate('/')
            })
    }
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/projects/" + props.id)
            .then(res => {
                setProject(res.data)
                console.log(res.data)
            })
    }, []);
    
    return (
        <>
        <Logo/>
            <h1>{project.title}</h1>
                <br/>
                {project.image}
                <p>{project.description}</p>
                <p>{project.tech_used}</p>
                <br/>
                <BottomFooter/>
        </>
    )
}
