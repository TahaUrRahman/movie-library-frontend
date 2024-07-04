'use client';
import React from 'react'

const CheckMovie = () => {
    return (
        <>
            <button onClick={() => console.log({ message: 'button clicked' })} className='p-5 bg-sky-400 text-white text-xl hover:bg-sky-700'>Click me!</button>
        </>
    )
}

export default CheckMovie