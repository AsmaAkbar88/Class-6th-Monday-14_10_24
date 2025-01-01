import React from 'react'
import Button from '../Components/Button'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      this is a about page 
      <Link href={'/'}>
      <Button btnName="Home"/></Link>
    </div>
  )
}

export default page
