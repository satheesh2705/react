import React from 'react'

const Contant = ({posts}) => {
  return (
    <main className='Home'>
           {
           posts.length?(
             posts.map((post) => (
              <div className="outerPost">
     <article className="post">
    
   <h1>{post.title}</h1>
    <p className="postBody">{
    (post.body)}
</p>
</article>
  </div>
                     )
                    )
                  ):(
            <p 
                style={{marginTop:"2rem"}}>
                No post to Display
            </p>
            )
           }

        </main>
  )
}

export default Contant