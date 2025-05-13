import { useEffect, useState } from "react"
export default function Crecat({handalePlaiyers}) {
  const [crecat, setCrecat] = useState([])

useEffect(()=>{
fetch('data.json')
.then(res => res.json())
.then(data => setCrecat(data))
},[])
  return (
    <div>
       <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-6">
        {
          crecat.map((cat)=> (
         <div key={cat.playerId} className="card bg-base-100 h-[600px] p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
  <figure>
    <img className="w-full h-full rounded-xl"
      src={cat.image} alt="pliyers img" />
  </figure>
  <div className="my-4">
     <div className="flex gap-4">
      <div><img className="w-12 h-12 object-cover rounded-full" src={cat.image} alt="pliyers img" /></div>
       <h2 className="card-title font-semibold text-2xl">{cat.name}</h2>
     </div>

     <div className="flex justify-between items-center">
    <div className="flex gap-4 mt-3">
      <div><img className="w-10" src={cat.flag} alt="flag img" /></div>
      <div> <p className="font-normal text-base text-gray-600">{cat.country}</p></div>
    </div>
      
      <div><button className="btn bg-gray-200 font-normal text-[14px]">{cat.category}</button></div>
     </div>

     <hr className="my-6"/>

     <p className="font-bold text-base">Rating</p>
    
<div className="my-2">
  {
    cat.battingStyle 
    ? <div className="flex justify-between items-center"> <p className="font-semibold text-base">Batting Style :</p> <p className="font-normal text-base text-gray-600">{cat.battingStyle}</p> </div> 

    : <div className="flex justify-between items-center"> <p className="font-semibold text-base">Bowling Style :</p>  <p className="font-normal text-base text-gray-600">{cat.bowlingStyle}</p></div>
  }
</div>

<div className="my-2">
  {
    cat.runsScored
    ? <div className="flex justify-between items-center"> <p className="font-semibold text-base">Runs Scored :</p> <p className="font-normal text-base text-gray-600">{cat.runsScored}</p> </div> 

    : <div className="flex justify-between items-center"> <p className="font-semibold text-base">Wickets Taken :</p>  <p className="font-normal text-base text-gray-600">{cat.wicketsTaken}</p></div>
  }
</div>

<div className="flex justify-between items-center">
  <p className="font-semibold text-base">Price: ${cat.biddingPrice}</p>

  <div><button onClick={()=> handalePlaiyers(cat)} href="#_" className="relative px-5 py-2 font-medium text-white group">
    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
    <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

    <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
    <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
    <span className="relative">Choose Player</span>
</button></div>

</div>

  </div>
</div>
          ) )
        }
       </div>
    </div>

  )
}



