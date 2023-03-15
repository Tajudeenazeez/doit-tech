import Link from 'next/link'
import React from 'react'


const Navbar:React.FC = () => {
  return (
    <>
        <div className='hidden md:flex items-center justify-between px-8 text-white w-full bg-[#00283a] h-[8rem]'>
            <div className='cursor-pointer hover:text-[#B0525C] font-bold  uppercase hover:border-b-[#b0525c]'><Link href="/">DOIT-tech</Link></div>

            <div className='flex sm:w-[60%] xl:w-1/3 items-center justify-between'>
                <div className='cursor-pointer hover:text-[#B0525C] font-semibold uppercase hover:border-b-[#b0525c]'><Link href="/service">Our Service</Link></div>
                <div className='cursor-pointer hover:text-[#B0525C] font-semibold uppercase hover:border-b-[#b0525c]'><Link href="/about">About Us</Link></div>
                <div className='cursor-pointer hover:text-[#B0525C] font-semibold uppercase hover:border-b-[#b0525c]'><Link href="/contact">Contact Us</Link></div>
                <div className='cursor-pointer hover:text-[#B0525C] font-semibold uppercase hover:border-b-[#b0525c]'><Link href="/login">Login</Link></div>
            </div>
        </div>
    </>
  )
}

export default Navbar