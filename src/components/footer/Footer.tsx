import React from 'react'
import {AiOutlineMail} from "react-icons/ai"
import {BsTelephoneFill} from "react-icons/bs"


const Footer = () => {
  return (
    <>
     <div className='grid grid-cols-2  lg:grid-cols-3 items-center justify-between px-8 h-[30vh] bg-[#00283a] text-[#314e5c] text-xl'>
        <div className='py-4'>
         <div>&copy;2023</div>
         <div className='w-1/2 '>DOIT-Tech Global services: All Right Reserved</div>
        </div>
        <div>
         <div className='py-4'>Developer</div>
        <div>Tako-Tech</div>
        </div>
        <div>
            <div>
                <h3 className='font-bold'>Support</h3>
                <address className='flex flex-col'>
                   <div className='flex py-4'>
                    <AiOutlineMail/> 
                       <a href="mailto:azeezproto@gmail.com?subject=Mail from our website">Send email</a>
                   </div>
                  <div className='flex'>
                  <BsTelephoneFill/>
                    <a href="tel:+234-814 254-9846"> +2348142549846</a>
                  </div>
                </address>
            </div>
        </div>
     </div>
    </>
  )
}

export default Footer