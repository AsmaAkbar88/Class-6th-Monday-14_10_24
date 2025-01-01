import React from 'react'

interface tprops {
  btnName : string
}


const Button = (props : tprops) => {
  return (
    <div>
      <button className='bg-red-400 text-white
       hover:bg-red-700
       rounded-full px-6 text-sm text'>
        { props.btnName}</button>

    
    </div>
  )
}

export default Button
