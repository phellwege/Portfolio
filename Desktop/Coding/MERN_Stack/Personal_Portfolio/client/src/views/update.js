import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';
import { Link } from '@reach/router';
import Logo from "../components/Logo"

export default props => {
    const { id } = props;
    const [name, setName] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects/' + id)
            .then(res => {
                setName(res.data.name);
            })
    }, [])
    const updateProject = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/project/' + id + '/edit',{
            name,
        })
            .then(res => {
                console.log(res);
                navigate('/')
            });
    }
    return (
        <div>
            <Logo/>
            <h1>Update a Product</h1>
            <form onSubmit={updateProject}>
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
            <button><Link to="/">Cancel</Link></button>
        </div>
    )
}
