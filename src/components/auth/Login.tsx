import React from 'react'


const Login = () => {
    //usesatate

    const onSubmit = () => {}
  return (
    <>
        <div>
            <h2>Log in</h2>
        </div>
       <form onSubmit={onSubmit}>
        <div>
                <label>Email</label>
                <input
                className=''
                    type="text"
                    placeholder="Enter email"
                    onChange={()=>{}}
                    required
                    
                />
            </div>
            <div>
                <label>
                    Password
                </label>
                <input
                className=''
                    type="password"
                    placeholder="Enter email"
                    onChange={()=>{}}
                    required
                />
            </div>
            <button className='bg-[#00283a] text-white w-[4rem] h-[1.2rem] rounded'  type='submit'>Log in</button>
       </form>
    </>
  )
}

export default Login