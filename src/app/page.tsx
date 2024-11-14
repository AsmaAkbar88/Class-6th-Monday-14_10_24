'use client'
import React, { useState } from 'react'

const page = () => {
    const [likes, setlikes] = useState(0)
    return (
        <div className='flex justify-center items-center flex-col text-center '>
<div className=' space-x-6'>

                {/* Additional  */}
                <h1 className='text-4xl font-bold text-center p-24'>Class 6th Monday </h1>
                <h1 className='text-4xl  text-center   '>Count: {likes}</h1>
                <button className='bg-black text-white p-2 text  hover:bg-red-600
       rounded-full py-2 px-4'  onClick={() => { setlikes(likes + 1) }}> +</button>

                {/* Subtraction  */}

                <button className='bg-black text-white p-2 text hover:bg-red-600
       rounded-full py-2 px-4'  onClick={() => { setlikes(likes - 1) }}> -</button>


                {/* Multiply  */}

                <button className='bg-black text-white p-2 text  hover:bg-red-600 
       rounded-full py-2 px-4'  onClick={() => { setlikes(likes * 2) }}> *</button>


                {/* Division  */}

                <button className='bg-black text-white p-2 text  hover:bg-red-600
       rounded-full py-2 px-4'  onClick={() => { setlikes(likes / 2) }}> /</button>
            </div>
        </div>
    )
}

export default page
