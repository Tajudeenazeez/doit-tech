import React from 'react'
import PhoneAnime from '../anime/PhoneAnime'
import SmsAnime from '../anime/SmsAnuime'
import WomanAnime from '../anime/WomanAnime'
import Hand from "../anime/Hand"

const Welcome:React.FC = () => {
  return (
    <>
  <div className=" overflow-x-hidden ">
    <div className="py-12 text-[#00283a] animate-marquee whitespace-nowrap ">
	    <span className="text-xl uppercase p-2 mx-4 bg-white">Buy Data subscription</span>
	    <span className="text-xl uppercase p-2 mx-4 bg-white">Buy cable subscription</span>
	    <span className="text-xl uppercase p-2 mx-4 bg-white">Buy Airtime</span>
	    <span className="text-xl uppercase p-2 mx-4 bg-white">Buy electricity</span>
	    <span className="text-xl uppercase p-2 mx-4 bg-white">Buy exam pin </span>
	    <span className="text-xl uppercase p-2 mx-4 bg-white">Buy bulk sms </span>
    </div>
    
</div>
      <div className='h-full'>
     
     <div className=' hidden lg:flex flex-col justify-end sm:w-[80%] lg:w-1/3  absolute top-[30%] left-20'>
        <img className='text-white w-2/3 '  src="/cartton.png" alt="cartoon man"/>
      </div> 
      <div>
        <h2 className='block  items-center absolute top-[30%] w-1/3 left-[30%] text-xl lg:text-6xl text-slate-800 uppercase'><span className='font-bold text-2xl lg:text-8xl'>doit-tech</span> gives you all the data to do it well</h2>
      </div>
     <div className='hidden lg:block relative w-full mt-10 h-[400px] '>
           <div className='absolute top-[-15%] left-[8%]  '>
        <WomanAnime/>
        </div>
        <div className='absolute top-[-15%] left-[22%]  '>
          <SmsAnime/>
        </div>
        <div className='absolute bottom-[30%] left-[20%]   '>
          <PhoneAnime />
        </div>
        <div className='absolute bottom-[30%] left-[8%]   '>
          <Hand/>
        </div>
     </div>
     <div className='flex mt-8 md:mt-2 w-full md:w-[500px] h-[200px] bg-[#00283a] lg:absolute right-20 top-40 my-8 mx-auto'>
        <div className='w-full md:w-[500px] h-[200px] bg-[#00283a] my-8'>
        <div className='flex flex-col justify-center items-center text-black  text-lg h-[150px] bg-[#00283a]'>
          <label className='text-white '  htmlFor="sub-select">Select your type of subscription:</label>
            <select className='w-2/3 h-[50px] mx-8 text-black' name="sub" id="sub-select"  >
              <option>--please choose an option</option>
              <option>Data</option>
              <option>cable</option>
              <option>Electricity</option>
              <option>Airtme</option>
              <option>exam-pin</option>
              <option>Bulk sms</option>
            </select>
        </div>
        </div>
     </div>

      </div>





    
    </>
  )
}

export default Welcome