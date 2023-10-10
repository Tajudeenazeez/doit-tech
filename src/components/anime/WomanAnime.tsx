import React from 'react'
import Lottie from "lottie-react"
import animationData from "../../lotties/woman.json"

const WomanAnime: React.FC = () => {
 
    return (
      <div>
        <Lottie 
          animationData={animationData}
          height={20}
          width={20}
          className="bg-white w-[70px] h-[70px] rounded-full"
        />
      </div>
    );
}

export default WomanAnime