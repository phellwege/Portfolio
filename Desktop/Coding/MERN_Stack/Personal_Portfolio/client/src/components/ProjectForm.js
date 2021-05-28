import React, { useState } from 'react'
import axios from 'axios';
import {navigate} from '@reach/router'
import { Link } from '@reach/router';
import Logo from "../components/Logo";
import BottomFooter from "../components/BottomFooter";




export default (props) => {
    const [title, setTitle] = useState(""); 
    const [image, setImage] = useState(""); 
    const [description, setDescription] = useState(""); 
    const [tech_used, setTech_used] = useState(""); 
    const [errors, setErrors] = useState(null);
    //handler when the form is submitted

    const onSubmitHandler = e => {
        e.preventDefault();
        const data = {
            title: title,
            image: image,
            description: description,
            tech_used: tech_used
        };
        axios.post('http://localhost:8000/api/project',
            data,
        )
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err=>{
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    }
    return (
        <>
        <Logo/>
        <form onSubmit={onSubmitHandler} enctype="multipart/form-data">
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>image</label><br/>
                <input type="file" accept=".png, .jpg, .jpeg" onChange={(e)=>setImage(e.target.value)} value={image}/>
            </p>
            <p>
                <label>description</label><br/>
                <input type="textArea" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <p>
                <label>tech_used</label><br/>
                <input type="textArea" onChange={(e)=>setTech_used(e.target.value)} value={tech_used}/>
            </p>
            <input type="submit"/>

        {errors?.title && (
            <span style={{ color: "red" }}>{errors?.title?.message}</span>
        )}
        </form>
        <BottomFooter/>
        </>
    )
}
