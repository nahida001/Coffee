import Navbar from './component/nabvar/navbar'
import Blogs from './component/blogs/blogs'
import './App.css'

function App() {
  

  return (
    <>
   <Navbar></Navbar>
  
    <div class="main-container flex text-center">
        <div class="right-container w-[70%]">
        
       <Blogs></Blogs>
        </div>
        <div class="left-container w-[30%]">
         <h1>Reading time :0</h1>
         <h1>BookMark Count:0</h1>
        </div>
    </div>
    </>
  )
}

export default App
