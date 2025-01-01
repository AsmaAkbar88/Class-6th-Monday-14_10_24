import React from 'react'

const page = () => {
  return (
    <div className='bg-gray-300 flex justify-center items-center h-screen'>
        <div className='bg-blue-600 p-4 rounded-lg space-y-9'>
            <h1 className='text-center text-5xl font-bold'>Contant us</h1>
            <form action="" className='flex flex-col gap-5 text-2xl'>
                <input type="text" className='p-2 outline-none rounded-md ' 
                placeholder=' Your Name' />

                <textarea name="message"  className='p-2 resize-none outline-none rounded-md' 
                placeholder=' Your Message'></textarea>


                <input type="submit" value="submit" 
                className='p-2 outline-none rounded-md
                 bg-orange-500
                transition-all duration-100 hover:bg-orange-400 py-2
                 text-white cursor-pointer' 
                placeholder=' Your Name' />
            </form>
        </div>
      
    </div>
  )
}

export default page
