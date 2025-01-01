import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='bg-gradient-to-b py-2 from-green-400
     to-indigo-500 '>
      <div className='flex justify-around w-full'>
        {/*left side */}
        <div className='flex items-center '>
          <h1 className='text-black font-bold text-lg'>Asma Akbar</h1></div>

        {/*right side */}
        <div className='space-x-6 text-lg'>
            <Link className='hover:text-teal-400 ' href={'/'}>Home</Link>
            <Link className='hover:text-teal-400 ' href={'about'}>About</Link>
            <Link className='hover:text-teal-400' href={'contact'}>Contact</Link>
            <Link className='hover:text-teal-400 ' href={'space'}>Space</Link>
            <Link className='hover:text-teal-400 ' href={'count'}>Count</Link>
            <Link className='hover:text-teal-400 '
             href={'Error'}>Error</Link>
            </div>
      </div>
    </div>
  )
}

export default Navbar
