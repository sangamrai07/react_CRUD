
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Blogs = () => {
  const [blogs,setBlogs] = useState([])

  useEffect(async ()=>{
   
   const response = await axios.get("https://test-api-hunchha089.onrender.com/blogs")
   console.log(response.data)
   if(response.data.status == 200){
    setBlogs(response.data.blogs)
   }

  },[])
console.log(blogs)


  return (
  <>
   {
    blogs.map((blog)=>{
      return (
        <div key={blog._id}>
        <h1>{blog.title}</h1>
        <h3>{blog.description}</h3>
        <img src={blog.image} alt="" width="50px" height="50px" />
  <br />
          <button onClick={() => window.location.href="/Blogs/" + blog._id}>View</button>
      </div>
      )
    })
   }
    </>
  )
}

export default Blogs
