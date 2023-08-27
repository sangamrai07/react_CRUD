import axios from 'axios'
import Button from '@mui/material/Button';
import { FormLabel, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Edit = () => {
const {id} = useParams();
const [blogs,setBlogs] = useState([])
const fetchFunctions = async()=>{
    const response = await axios.get("https://test-api-hunchha089.onrender.com/blogs/" + id)
    if (response.status == 200){
        setBlogs(response.data.blogs)
    }
}
useEffect(()=>{
    fetchFunctions()
},[])

const [title,setTitle] = useState(null)
const [description, setDescription] = useState(null)
const [image, setImage] = useState(null)
const navigate = useNavigate();

async function updateBlog(e){
    e.preventDefault()
    const data = {
        title : title,
        description : description,
        image : image
    }
    const response = await axios.patch("https://test-api-hunchha089.onrender.com/blogs/" + id, data,{
        headers: {
            "Content-Type" : "multipart/form-data"
        }
    })
    if (response.data.status == 200){
        navigate("/blogs")
    }
}

  return (
    <div>
       <form  className='blogs' onSubmit={(e)=>updateBlog(e)}>
            <div className='create'>
                <FormLabel>BlogName: </FormLabel>
                <TextField variant="outlined" onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className='create'>
                <FormLabel>Description: </FormLabel>
                <TextField multiline maxRows={10} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className='create'>
                <FormLabel>Image:</FormLabel>
                <input name="image" type="file" onChange={(e)=>setImage(e.target.files[0])}/>
            </div>
            <Button type='submit' variant='contained'>Update</Button>
        </form>
    </div>
  )
}