import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  const {users} = useSelector((state) => state.userReducer); 

  


  




  return (
    <div className=' bg-red-300 h-full w-1/2 flex flex-col items-start justify-start ml-auto mr-auto p-5 mt-10'>
      <div className='bg-red-500 text-center mt-10 w-60 ml-auto mr-auto  h-20 py-4  '>
      <h1 className=' text-white text-5xl font-bold'>User List </h1>
      </div>

      <ul className=' mt-5 ml-52'>
  
 {users.map((items , index) =>{
       return <li key={index} className='' >
        {items.id}
        {items.username}
</li>
 }) 


 }
        
      </ul>
      
       
      
      </div>
  )
}

export default App