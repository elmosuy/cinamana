import { bodyStreamToNodeStream } from 'next/dist/server/body-streams'
import React from 'react'
 export async function getStaticProps() {
        const res= await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await res.json()

        return {
          props: {posts,}, 
        }
      }
const videos = ({posts}) => {
   



  return (
    <div ><h1>8y</h1>
        {posts[2].id}
        
        <div>{<h3>loodin..</h3>&&posts.map(post=>(
        <div key={post.id}><h1>{post.title}</h1></div>
    ))}
    
    </div>
    </div>
  )
}

export default videos