import React from 'react'
import { Link } from 'react-router-dom'
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { Button } from '@mui/material'

const Teachings = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-white duration-200">
      {/* First Section with Icon */}
      <div className="w-full bg-primary bg-opacity-10 p-10 border-b-[0.5px] border-gray-200 dark:border-black shadow-none">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <Link
            className="flex items-center justify-center text-3xl sm:text-2xl font-bold font-poppins hover:text-primary transition-all duration-300 p-2 whitespace-nowrap flex-shrink-0" 
            to='/Teachings'
          >
            <PiChalkboardTeacherFill className="inline-block mr-2 text-3xl sm:text-2xl flex-shrink-0" />
            My Teachings
          </Link>
        </div>
        {/* Static Text */}
      <div className="flex justify-center items-center mt-4">
        <p className="text-gray-500 text-xl sm:text-lg mb-4 text-center font-semibold italic px-2">
          Explore my Teachings, where I share courses and knowledge on software engineering, cybersecurity, and more.
        </p>
      </div>
      <div className="flex justify-center items-center whitespace-nowrap text-lg sm:text-base italic text-gray-700 mt-4 text-center flex-shrink-0 dark:text-gray-400">
        <Button
          variant="outlined"
          color="primary"
          className="mt-4"
          href="mailto:abdelaziz@azizmoustakim.com"
        >
          Hire Me
        </Button>
      </div>
      </div>


      
    </div>
  )
}
export default Teachings;