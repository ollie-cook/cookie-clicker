'use client'

import { useState } from 'react'
import Cookie from '../Cookie'
import Counter from '../Counter'

export default function Container() {
  const [count, setCount] = useState(0)


  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-end h-full">
      <Cookie setCount={() => setCount(prev => prev+1)}/>
      <Counter currentCount = {count}/>
    </div>
  );
}