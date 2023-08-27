import axios from 'axios';
import React, { useState } from 'react'


function BlogForms() {

    const [name, setName] = useState();
    const [desc, setDesc] = useState();
    const [img1, setImg1] = useState();

    console.log(name)
    console.log(desc)
    console.log(img1)

    const createBlog = async (e) => {
        e.preventDefault()
        await axios.post("https://test-api-hunchha089.onrender.com/blogs", {
            title: name,
            description: desc,
            image : img1
        }, {
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        })

  const blogStatus = await axios.get("https://test-api-hunchha089.onrender.com/blogs")
   console.log(blogStatus.data)
   if(blogStatus.data.status == 200){
       alert('Blog Created Successfully')
       window.location.href='/Blogs'
   }
    }



  return (
    <>
          <form onSubmit={(e)=>createBlog(e)}>
              <label htmlFor="BlogName">Name: </label>
              <input type="text" onChange={(e)=>setName(e.target.value)} name="BlogName" placeholder='Name of Blog...' />
              <br />
              <label htmlFor="Desc">Description: </label> <br />
              <textarea name="Desc" onChange={(e)=>setDesc(e.target.value)} cols="50" rows="10"></textarea>
              <br />
               <label htmlFor="Image">Image: </label>
              <input type="file" onChange={(e) => setImg1(e.target.files[0])} name='Image' />
              <input type="submit" value="Submit" />
          </form>
    </>
  )
}

export default BlogForms
