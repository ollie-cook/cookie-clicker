'use client'

interface CookieProps {
  setCount: () => void
}

export default function Cookie(props: CookieProps) {
  return (
    <div className="w-1/2 flex justify-center">
      <button onClick = {props.setCount}>
        <img src="/cookie.png" alt="cookie" />
      </button>
    </div>
  );
}