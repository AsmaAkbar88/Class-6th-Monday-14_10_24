import Link from 'next/link'
import React from 'react'
import Button from '../Components/Button'

const page = () => {
  return (
    <div>
      <div className='bg-gray-500 h-screen p-8 space-y-6 '>
        <h1 className='text-4xl font-bold text-center'>404 error page</h1>

        <p className=' text-justify  text-xs max-w-2xl mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit natus consequuntur nesciunt numquam! Commodi at veniam minus iste dicta voluptas ipseriores facilis atque cumque non, molestias nemo amet, perspiciatis facere ipsam tempora maxime itaque cum recusandae cupiditate.</p>

        <Link href={'/'} className='flex items-center justify-center'>
      <Button btnName = 'Home'/></Link>
      </div>
      
    </div>
  )
}

export default page
