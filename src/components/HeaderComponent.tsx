import React, { useState } from 'react'
import SwitchComponent from './SwitchComponent'

const HeaderComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className='grid grid-cols-2'>
        <div>
          <h1 className='font-semibold text-4xl'>Social Media Dashboard</h1>
          <h2 className='font-semibold text-2xl text-gray-500'>Total Followers: 23,004</h2>
        </div>
        <div>
          <div className='flex justify-end'>
            <span className='text-4xl pr-5 text-gray-400 font-semibold'>Dark Mode</span>
            <SwitchComponent isOn={darkMode} handleToggle={() => setDarkMode(!darkMode)} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderComponent
