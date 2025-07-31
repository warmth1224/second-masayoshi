"use client"

import dynamic from "next/dynamic";

const DynamicLottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const AnimationLottie = ({ animationPath, width }) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <DynamicLottie {...options} />
  );
};

export default AnimationLottie;