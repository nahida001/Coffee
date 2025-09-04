import Navbar from './component/nabvar/navbar'
import Blogs from './component/blogs/blogs'
import './App.css'
import { useState } from 'react'

function App() {
 const [bookmarked,setBookmarked] = useState([])
const[readingCount,setreadingCount]=useState(0)
const handleBookmark=(blog)=>{
  //console.log(blog)
  setBookmarked([...bookmarked,blog])

}
const markasRead=(time,id)=>{
  setreadingCount(readingCount+time)
  handleremovebookmark(id)
}

const handleremovebookmark=(id)=>{
const remainBookmark=bookmarked.filter((mark)=>mark.id!==id)
setBookmarked(remainBookmark)
}
  return (
    <>
   <Navbar></Navbar>
  
    <div class="main-container flex text-center">
        <div class="right-container w-[70%]">
        
       <Blogs handleBookmark={handleBookmark} markasRead={markasRead}></Blogs>
        </div>
        <div class="left-container w-[30%]">
         <h1>Reading time :{readingCount}</h1>
         <h1>BookMark Count:{bookmarked.length}</h1>
         {
          bookmarked.map(marked => <p key={marked.id} className='bg-red-400 shadow m-2 text-white'>{marked.name}</p>)
         }
        </div>
    </div>
    </>
  )
}

export default App
