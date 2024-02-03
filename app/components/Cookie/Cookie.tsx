'use client'

import { useState } from 'react'

interface CookieProps {
  setCount: () => void
}

export default function Cookie(props: CookieProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 100);
    props.setCount();
  }

  return (
    <div className="w-1/2 flex justify-center">
      <button onClick = {handleClick}>
        <img src="/cookie.png" className={`w-[512px] transform ${isClicked ? 'scale-105' : ''}`} alt="cookie" />
      </button>
    </div>
  );
}

//<img src="/cookie.png" className={`w-[512px] transform ${isClicked ? 'scale-110' : ''}`} alt="cookie" />