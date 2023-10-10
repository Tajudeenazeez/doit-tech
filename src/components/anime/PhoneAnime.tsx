import React from 'react'
import Lottie from "lottie-react"
import animationData from "../../lotties/lightbulb.json"

const PhoneAnime: React.FC = () => {
 
    return (
      <div>
        <Lottie 
          animationData={animationData}
          className=" bg-white w-[70px] h-[70px] rounded-full"
        />
      </div>
    );
}

export default PhoneAnime