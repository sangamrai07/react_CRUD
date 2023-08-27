import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blogs from './components/Blogs'
import BlogForms from './components/BlogForms'
import Blog1 from './components/Blog1'
// import EditBlog from './components/EditBlog'
import { Edit } from './components/Edit'

function App() {

  

  // useEffect(() => {
  //   console.log("Hello")
  // }, [])
      
  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/Form' element={<BlogForms />} />
          <Route path='/Blogs/:id' element={<Blog1 />} />
         {/*  <Route path='/EditBlog/:id' element={<EditBlog />} /> */}
          <Route path='/EditBlog/:id' element={<Edit/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

