import Link from 'next/link'
import React from 'react'
import { FaAngleDown, FaArrowAltCircleDown, FaArrowDown, FaBars } from 'react-icons/fa'


const Navbar:React.FC = () => {
  return (
    <>
        <div className='hidden md:flex items-center justify-between px-12 text-black w-full bg-white h-[8rem] '>
            <div className='cursor-pointer hover:text-[#00283a] font-bold  uppercase hover:border-b-[#00283a]'><Link href="/">DOIT-tech</Link></div>

            <div className='flex  items-center justify-between'>
                <div  className='flex items-center gap-x-4 px-8 cursor-pointer hover:text-[#00283a] font-semibold uppercase hover:border-b-[#00283a]'>Our Service<FaAngleDown/></div>
                <div className='flex items-center gap-x-4 px-8 cursor-pointer hover:text-[#00283a] font-semibold uppercase hover:border-b-[#00283a]'><Link href="/about">About Us</Link><FaAngleDown/></div>
                <div className='flex items-center gap-x-4 px-8 cursor-pointer hover:text-[#00283a] font-semibold uppercase hover:border-b-[#00283a]'><Link href="/contact">Contact Us</Link><FaAngleDown/></div>
            </div>
            <div className='flex sm:w-[30%] xl:w-[270px] items-center justify-between'>
                <div className='cursor-pointer hover:text-[#00283a] font-semibold uppercase hover:border-b-[#00283a]'><Link href="/contact">Sign In</Link></div>
                <div className='cursor-pointer hover:text-[#00283a] font-semibold uppercase hover:border-b-[#00283a]'><Link href="/login"><button className='w-[11.5rem] h-[3.4rem] p-2 rounded-md bg-[#00283a] text-white'>Create account</button></Link></div>
            </div>
        </div>
      <div className='flex md:hidden lg:hidden items-center justify-between px-8 text-white w-full bg-[#00283a] h-[8rem]'>
        <FaBars size={50}/>
      </div>
    </>
  )
}

export default Navbar