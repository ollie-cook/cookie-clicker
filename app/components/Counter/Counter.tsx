'use client'

interface ContainerProps {
  currentCount: number
}

export default function Container(props: ContainerProps) {
  return (
    <div className="flex flex-col justify-start items-center w-1/4">
      <div className="flex items-center h-[5svh]">
        <p className="text-center text-white font-bold">1,000,000</p>
      </div>
      <div className="h-[90svh] w-16 sm:w-32 border-2 border-white relative">
        <div 
          className="h-36 w-full bg-green-400 absolute bottom-0"
          style={{height: `${(props.currentCount/1000000)*90}svh`}}
        >
        </div>
      </div>
      <div className="flex items-center h-[5svh]">
        <p className="text-center text-white font-bold">{props.currentCount}</p>
      </div>
    </div>
  );
}