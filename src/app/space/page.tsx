import React from 'react'

const page = () => {
  return (
    <div className='bg-gray-300 p-4 min-h-screen space-y-5'>
     <h1 className='font-bold text-center text-4xl '> 3 Column Div</h1>

     {/* main div  */}
     <div className='grid gap-8 grid-cols-3'>

        {/* 1st div   */}
        <div className='grid grid-rows gap-4 bg-yellow-300 
         space-y-4 p-4 hover:bg-blue-400 transition-all duration-100'>
            <h1 className='font-bold text-2xl text-center'>First Div</h1>
            <p>Lodi corrupti expedita delectus molestiae, rem sed ducimus ipsum</p>
            <button  className='bg-blue-600 h-12 hover:bg-slate-500  self-end font-bold text-center w-full py-3'>Details</button>
        </div>

        {/* 2st div   */}
        <div className=' grid grid-rows  bg-purple-500   
        space-y-4 p-4 gap-4 hover:bg-blue-400 transition-all duration-100'>
            <h1 className='font-bold text-2xl text-center'>Second Div</h1>
            <p>Lorem ipsum dolor Lorem ipsum dolor sit amet conscorruptienim deserunt expedita. Rerum eligendi corrupti expedita delectus molestiae, rem sed ducimus ipsum</p>
            <button  className='bg-blue-600 h-12 hover:bg-slate-500 self-end font-bold text-center w-full py-3'>Details</button>
              </div>
            {/* 3st div   */}
        <div className='grid grid-rows-[auto, 1fr,auto] bg-green-500 space-y-4 p-4 hover:bg-blue-400 transition-all  gap-4 duration-100'>
            <h1 className='font-bold text-2xl text-center'>Third Div</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet corrupti optio placeat, temporibus dolore itaque quia ab enim deserunt expedita. Rerum eligendi corrupti expedita delectus molestiae, rem sed ducimus ipsum</p>
            <button  className='bg-blue-600 hover:bg-slate-500 self-end h-12 font-bold text-center w-full py-3'>Details</button>
      
        </div>
     </div>
    </div>
  )
}

export default page
