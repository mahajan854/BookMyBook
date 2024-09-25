import React from 'react'
import Navbar from '../Components/Navbar'
import Course from '../Components/Course'
import Foot from '../Components/Foot'

function Courses() {
   
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
      
      <Course/>
    </div>
    
    <Foot/>
    </>
  )
}

export default Courses;