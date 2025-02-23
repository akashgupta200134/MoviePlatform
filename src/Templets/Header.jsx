
import React from 'react'

const Header = ({data}) => {
  return  (
    <div 
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
        url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path || data.profile_path})`,
        backgroundPosition : ' top center',
        backgroundSize : 'cover',
        height : "450px",
        width : "1150px",
       
        
        
    }}
    
   
    className='  flex flex-col justify-end p-[10%] '>
      

      <h1 className=' text-5xl font-bold text-white '> {data.title ||
                data.orignal_title ||
                data.name ||
                data.original_name}</h1>

          <span className=' font-semibold capitalize text-white ml-1 mt-1 '> Hindi | English | Tamil | Telegu </span> 
        <p className=' text-white px-1 font-semibold  capitalize mt-1 '> <span> </span> {data.media_type} 
          </p>  
              

    </div>
  )
}

export default Header


