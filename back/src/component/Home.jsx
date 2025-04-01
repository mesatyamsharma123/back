import React from 'react'
import pic from '../../public/pic.avif'
import pic2 from '../../public/pic2.jpg'
function Home() {
  return (
    <div className=' flex flex-col items-center justify-center h-screen w-screen bg-cover' style={{backgroundImage:`url(${pic})`}}>
 <div className='w-xs md:w-sm bg-white rounded-2xl bg-cover h-200' style={{backgroundImage:`url(${pic2})`}} >
cvv
 </div>
    </div>
  )
}

export default Home
