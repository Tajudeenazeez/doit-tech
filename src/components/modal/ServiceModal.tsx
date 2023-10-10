import React from 'react'


const ServiceModal = () => {
  return (
    <>
        <button type='button'  data-modal-target="#popup-modal" data-modal-toggle="#popup-modal"  className='w-[100px] h-[2rem] bg-black text-white text-xl'>open</button>
        <div tabIndex={-1} aria-hidden="true" className=' modal fixed top-20 right-0 w-[600px] h-[9rem] bg-black text-white text-6xl' id="popup-modal" >thia ia the modal</div>
    </>
  )
}

export default ServiceModal

