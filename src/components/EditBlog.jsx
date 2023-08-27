import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';


function EditBlog() {

    const [name, setName] = useState(null);
    const [desc, setDesc] = useState(null);
    const [img1, setImg1] = useState(null);

    console.log(name)
    console.log(desc)
    console.log(img1)

    const {id} = useParams()

    const [blogs,setBlogs] = useState([])

  useEffect(async ()=>{
   
   const response = await axios.get("https://test-api-hunchha089.onrender.com/blogs/"+ id)
   
   if(response.data.status == 200){
    setBlogs(response.data.blogs)
   }

  },[])

  const editBlog = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('title', name);
  formData.append('description', desc);
  formData.append('image', img1);

  try {
    const response = await axios.patch(
      `https://test-api-hunchha089.onrender.com/blogs/${id}`,
      formData
    );

    if (response.data.status === 200) {
      window.location.href = "/blogs";
    }
  } catch (error) {
    console.error('Error editing blog:', error);
  }
};

    
        return (
            <>
                <form onSubmit={(e) => editBlog(e)}>
                    <label htmlFor="BlogName">Name: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} name="BlogName" placeholder='Name of Blog...' />
                    <br />
                    <label htmlFor="Desc">Description: </label> <br />
                    <textarea name="Desc" onChange={(e) => setDesc(e.target.value)} cols="50" rows="10"></textarea>
                    <br />
                    <label htmlFor="Image">Image: </label>
                    <input type="file" onChange={(e) => setImg1(e.target.files[0])} name='Image' />
                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }


export default EditBlog
