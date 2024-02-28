import React, { useState } from 'react'
import Login from './login'
import Contant from './Contant'
import Home from './Home'

const App = () => {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Hello World',
      body: 'This is the first post',
    }
  ] ) 
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')


  const handleSubmit = async (e) => {

      e.preventDefault(); 
      // const id = posts.length ? posts[posts.length -1 ].id + 1 : 1;
      const id = posts.length ? posts[posts.length ]:1;
      const newPost = {id, title:postTitle,  body:postBody}
          const allPosts = [...posts, newPost]
          setPosts(allPosts);
          localStorage.setItem("todo_list",JSON.stringify(allPosts))
          setPostTitle('')
          setPostBody('')
        }

  return (

    <div>

   
      <Home posts={posts}/>
      

    
    <Login
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle} 
              postBody={postBody}
              setPostBody={setPostBody}
     />
    <Contant />

    </div>
  )
}

export default App
