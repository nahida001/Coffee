import React from 'react';
import { FaBookmark } from "react-icons/fa";
const blog = ({blog, handleBookmark,markasRead}) => {
   //const {blog}=props
    //console.log(handleBookmark)
   console.log(blog)
  
    return (
        <div className='m-2'>
           
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
     />
      
  </figure>
  <div className="card-body">
    <div className='author flex justify-around items-center'>
    
          <img className='w-16 rounded-full ...' src={blog.author_image}
     />
      <h3>{blog.author_name}</h3>
     <button onClick={()=>handleBookmark(blog)}><FaBookmark size={25} />
      </button> 
    </div>
     <h2 className="card-title">{blog.name}</h2>
     <p>{blog.description}</p>
     <div className='flex'>
            {
      blog.hastag.map((has)=><p>{has}</p>)
     }
     </div>
    
    <div className="card-actions justify-end">
      <button onClick={()=>markasRead(blog.reading_time)} className="btn btn-primary">Mark as read</button>
    </div>
  </div>
        </div>
        </div>
    );
};

export default blog;