import Image from 'next/image';
import React from 'react';

const Slideshow = () => {
  return (
    <div className="flex gap-4 -z-10 animate-in">
      <div className="w-32 h-auto">
        <Image src="/Airbnb Logo.png" alt="airbnb" width={320} height={320} className='' />
      </div>
      <div className="w-32 h-auto">
        <Image src="/Airbnb1 Logo.png" alt="airbnb" width={320} height={320}  />
      </div>
      <div className="w-32 h-auto">
        <Image src="/Airbnb2 Logo.png" alt="airbnb" width={320} height={320}  />
      </div>
      <div className="w-32 h-auto">
        <Image src="/Airbnb3 Logo.png" alt="airbnb" width={320} height={320}  />
      </div>
      <div className="w-32 h-auto">
        <Image src="/Airbnb5 Logo.png" alt="airbnb" width={320} height={320}  />
      </div>
      <div className="w-32 h-auto">
        <Image src="/Airbnb6 Logo.png" alt="airbnb" width={320} height={320}  />
      </div>
    </div>
  );
};

export default Slideshow;
