
import axios from 'axios'
import  React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Blog1() {

  

  const { id } = useParams()
  
    const [blogs,setBlogs] = useState([])

  useEffect(async () => {
    const response = await axios.get("https://test-api-hunchha089.onrender.com/blogs/" + id)
    console.log(response.data)
    if (response.data.status == 200) {
      setBlogs(response.data.blogs)
    }

  }, [])


 const handleDelete = async () => {
      await axios.delete("https://test-api-hunchha089.onrender.com/blogs/" + id);
      window.location.href='/Blogs'
  };

  console.log(blogs)
    
  return (
    <> 
       <div key={blogs._id}>
        <h1>{blogs.title}</h1>
        <h3>{blogs.description}</h3>
    <img src={blogs.image} alt="" width="50px" height="50px" />
        </div>
 <button onClick={handleDelete}>
      Delete
    </button>
      <button onClick={() => {
        window.location.href="/EditBlog/"+ blogs._id
      }}>Edit</button>
      
    </>
  )
}

export default Blog1
