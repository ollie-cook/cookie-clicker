'use client'

import { useState, useEffect } from 'react'
import Cookie from '../Cookie'
import Counter from '../Counter'
import Cookies from 'js-cookie'

export default function Container() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (Cookies.get('cookie-count') !== undefined) {
      setCount(parseInt(Cookies.get('cookie-count') || "0"))
    } 
  }, [])

  const updateCount = () => {
    setCount(prev => prev+1)
    Cookies.set('cookie-count', count.toString())
  }

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-end h-full">
      <Cookie setCount={updateCount}/>
      <Counter currentCount = {count}/>
    </div>
  );
}