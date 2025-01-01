import React from 'react'

const page = ({params}: {params: {childpages:string}}) => {
  return (
    <div>
      <h1>this is a {params.childpages} page</h1>
    </div>
  )
}

export default page
