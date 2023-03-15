import React from 'react'
import { FaGreaterThan, FaLessThan} from "react-icons/fa"


const Welcome:React.FC = () => {
  return (
    <>
        <div className='text-white'>
            <div className='hidden lg:block bg-[#00283a] w-8 h-24 md:absolute top-[25%] p-px left-8'><FaLessThan className='pt-2 align-center pl-2' size={20}/></div>
            <div className='hidden lg:block bg-[#00283a] w-8 h-24 md:absolute top-[25%] p-px left-[4.4rem]'><FaGreaterThan className='pt-2 pl-2' size={20}/></div>
        </div>
        <div className='hidden lg:flex flex-col sm:w-[80%] lg:w-1/3 absolute top-[30%] left-8'>
            <div className='text-3xl text-white bg-[#b0525c] p-4 uppercase'>WELCOME TO</div>
            <div className='text-xl text-[b0525c] bg-[#00283a] p-4 uppercase'>DOIT-TECH GLOBAL SERVICES</div>
            <div className='text-xl text-white bg-[#b0525c] p-4 uppercase'>we offer IT solution and subscriptions</div>
        </div>
        {/* <div className='flex'>
            <div>Buy Data</div>
            <div>Buy cable subscription</div>
            <div>Buy Airtime</div>
            <div>Pay electricity bill</div>
            <div>Buy exam pins</div>

        </div> */}

     <div className='block mt-8 md:mt-2 w-[500px] h-[200px] bg-[#00283a] lg:absolute right-20 top-40 my-8 mx-auto'>
        <div className='w-[500px] h-[200px] bg-[#00283a] my-8'>
        <div className='flex flex-col justify-center items-center  text-black text-lg h-[150px] bg-[#b0525c]'>
          <label  htmlFor="sub-select">Select your type of subscription:</label>
            <select className='w-2/3 h-[50px] mx-8' name="sub" id="sub-select"  >
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
    </>
  )
}

export default Welcome