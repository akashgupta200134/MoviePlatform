import { FallingLines } from "react-loader-spinner"


const Loader = () => {

  return (

    <div className="flex justify-center items-center h-screen">
    <h1 className="text-2xl font-semibold px-96 ml-64 ">
      
< FallingLines
visible={true}
height="80"
width="80"
radius="48"
color="#6556CD"
ariaLabel="watch-loading"
wrapperStyle={{}}
wrapperClass=""
/>
    </h1>
  </div>
  )
}

export default Loader;


