"use client"

import Dither from './Dither';

export default function Square(){
return (
    <div className="min-h-screen fixed inset-0 -z-10">
          <Dither
    waveColor={[0.3, 0.8, 0.5]}
    disableAnimation={false}
    enableMouseInteraction={true}
    mouseRadius={0.3}
    colorNum={7}
    waveAmplitude={0.43}
    waveFrequency={3}
    waveSpeed={0.05}
  />

    </div>

)
}