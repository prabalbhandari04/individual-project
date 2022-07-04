import React from 'react'

const Button = ({ value }) => {
  return (
    <button className='px-12 py-2 bg-primary hover:bg-secondary text-base text-white font-regular w-full lg:w-fit'>{value}</button>
  )
}

export default Button