import React from 'react'
import { FaCog, FaHome, FaPoll, FaRegEnvelope, FaRegFileAlt } from 'react-icons/fa'

const Sidebar = ({sidebarToggle}) => {
  return (
    // sebelum tambah toggle <div className='w-64 bg-gray-800 fixed h-full px-4 py-2'>
    <div className={`${sidebarToggle ? "hidden": "block"} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
        <div className='my-2 mb-4'>
            <h1 className='text-2x text-white font-bold'>Admin Dashboard</h1>
        </div>
        <hr/>
        <ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href=''>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                Home
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href=''>
                    <FaRegFileAlt className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegFileAlt>
                Blogs
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href=''>
                    <FaPoll className='inline-block w-6 h-6 mr-2 -mt-2'></FaPoll>
                Reports
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href=''>
                    <FaRegEnvelope className='inline-block w-6 h-6 mr-2 -mt-2'></FaRegEnvelope>
                Inbox
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                <a href=''>
                    <FaCog className='inline-block w-6 h-6 mr-2 -mt-2'></FaCog>
                Setting
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar