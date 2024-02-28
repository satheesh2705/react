import React from 'react'

const Login = ({postTitle,setPostTitle,postBody,setPostBody, handleSubmit}) => {
  return (
    <main className='newPost'>
        <p>Home</p>
        <h1>NewPost</h1>
        <form action="" className='postForm' onSubmit={handleSubmit}>
          <label htmlFor="forHeading">Title:</label>
          <input 
            type="text" 
            id="postTitle"
            required 
            placeholder='Enter title'
            value={postTitle}
            onChange={e => setPostTitle(e.target.value)}
            />
          <label htmlFor="body">Body:</label>

          <textarea 
          required
          placeholder='type here'
          value={postBody}
          onChange={e => setPostBody(e.target.value)}
          id="postBody"
          
          >
           
          </textarea>
          <button type="submit">Submit</button>
        </form>
    </main>
    )
}

export default Login