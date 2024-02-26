"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis
      options={{
        smooth: true,
        smoothMobile: true,
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        smoothTouch: true,
        
      }}
      root
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
