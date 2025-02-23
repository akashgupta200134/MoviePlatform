import React from 'react'

const Horizontalcards = ({data}) => {
  return (
    <div className=' w-full h-[50%] '>
        <h1 className=' text-white font-bold text-3xl p-4 ml-5'> Top Trending</h1>
        <div className=' w-[60vh] h-[25vh]  mb-10 flex flex-row gap-3 rounded-lg ml-5'>
            <span className=' mt-10'>  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="52"
  height="52"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  color='white'
 
>
  <polyline points="15 18 9 12 15 6" />
</svg>
</span>
            {data.map((items,index) => (
                <img key={index}  className=' h-[25vh] w-[50vh] rounded-lg'
               src={`https://image.tmdb.org/t/p/original/${items.backdrop_path || items.poster_path}`}
                alt="" />

            ))}


         </div>

        




    </div>
  )
}

export default Horizontalcards