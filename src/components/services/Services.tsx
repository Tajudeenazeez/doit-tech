import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <>
      <div className='flex flex-wrap gap-8 items-center justify-evenly  mx-8  justify-stretch my-8'>
        <div className='flex flex-col justify-self-stretch h-[500px] w-[25rem] shadow  hover:scale-90 hover:shadow-indigo-500/40 p-4 gap-4 justify-center items-center '>
                <Image className='mx-[auto]' src="/data.jpg" width={200} height={120} alt="buy data"/>
                <div className='text-2xl text-black  '>Provides unique and affordable data plans</div>
                <div className='text-lg text-gray-900  box-border'>Get MTN 3GB for N850, MTN 20GB N5000; GLO 13.25GB - N3500 GLO 7.7GB - N2225 and more.</div>
            </div>
        <div className='flex flex-col justify-self-stretch h-[500px] w-[25rem] shadow  hover:scale-90 hover:shadow-indigo-500/40 p-4 gap-4 justify-center items-center '>
                <Image className='mx-[auto]' src="/cabletv2.png" width={250} height={250} alt="buy cable-sub"/>
                <div className='text-2xl text-black '>Number one online shop for your cable TV subcriptions</div>
                <div className='text-lg text-gray-900  box-border'>Experience instant subscription of your DStv, GOtv and Startimes packages.</div>
            </div>
        <div className='flex flex-col justify-self-stretch h-[500px] w-[25rem] shadow  hover:scale-90 hover:shadow-indigo-500/40 p-4 gap-4 justify-center items-center '>
                <Image className='mx-[auto]' src="/energy.jpg" width={250} height={250} alt="buy electricity"/>
                <div className='text-2xl text-black '>Pay your electricity bills</div>
                <div className='text-lg text-gray-900  box-border'>Never run out of electricity units across any state/district in Nigeria. Get your energy token for AEDC | IBEDC| IKEDC | EEDC | EKEDC | PHED| BEDC | and others</div>
            </div>
        <div className='flex flex-col justify-self-stretch h-[500px] w-[25rem] shadow  hover:scale-90 hover:shadow-indigo-500/40 p-4 gap-4 justify-center items-center '>
                <Image className='mx-[auto]' src="/exam.jpg" width={150} height={150} alt="buy exam-pin"/>
                <div className='text-2xl text-black '> Pay for your examination PINs</div>
                <div className='text-lg text-gray-900  box-border'>Purchase examination registration and result-checker/Access PINs for WAEC, NECO, NABTEB AND JAMB from us at your convenience, and at affordable prices.</div>
            </div>
       
            <div className='flex flex-col justify-self-stretch h-[500px] w-[25rem] shadow  hover:scale-90 hover:shadow-indigo-500/40 p-4 gap-4 justify-center items-center '>
                <Image className='mx-[auto]' src="/airtime.jpg" width={250} height={250} alt="buy airtime"/>
                <div className='text-2xl text-black'>Airtime topup at your convenience</div>
                <div className='text-lg text-gray-900  box-border'>Topup your airtime for all networks across Nigeria: MTN, AIRTEL, GLOBACOM, 9MOBILE and SMILE. All at amazing discounts.</div>
            </div>
            <div className='flex flex-col justify-self-stretch h-[500px] w-[25rem] shadow  hover:scale-90 hover:shadow-indigo-500/40 p-4 gap-4 justify-center items-center '>
                <Image className='mx-[auto]' src="/onlineservices.jpg" width={250} height={250} alt="buy onlineservices"/>
                <div className='text-2xl text-black '> Other Online services</div>
                <div className='text-lg text-gray-900  box-border'>some of the services we offer include data analysis, project writing, website creation</div>
        </div>
      </div>
    </>
  )
}

export default Services