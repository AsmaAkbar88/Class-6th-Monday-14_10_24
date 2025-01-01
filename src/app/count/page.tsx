'use client'
import React, { useState } from 'react'

const Page = () => {
    const [numValue, setNumValue] = useState(0)
    const [textValue, setTextValue] = useState("")

    function increment() {
        if (numValue >= 0) {
            setNumValue((num) => num + 1)
            setTextValue("number is incrsing by 1")
        }
    }

    function dec() {
        if (numValue > 0) {
            setNumValue((num) => num - 1)
            setTextValue("number is decsing by 1")
        }
    }


    return (
        <div className='bg-gray-300 flex justify-center   items-center min-h-screen'>
            <div className=' bg-blue-400 py-6 border-2 border-black'>
                {/* heading */}
                <div className='space-y-4 text-center'>
                    <h1 className=' text-4xl'>{numValue}</h1>
                    <p className='p-6'>
                        {textValue}
                    </p>

                </div>
                {/* button  */}
                <div className='flex gap-5 justify-center'>
                    <button onClick={increment} className='bg-gray-300 px-5 py-2 rounded-lg hover:bg-blue-400 '>incease</button>


                    {/* button  */}

                    <button onClick={dec} className='bg-gray-300 px-5 '>decease</button></div>
            </div>
        </div>
    )
}

export default Page
