import { MdOutlineDeleteForever } from "react-icons/md";
export default function SlectBookMark({plaiyer,deletPliiyears}) {
  return (
        <div>
        <div>
          {
            plaiyer.map((ple,idx)=> <div key={idx} className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-2xl p-4 my-4">

         <div className="flex justify-between items-center">

        <div className="flex gap-8 items-center">
          <div><img className="w-32 h-20 rounded-2xl " src={ple.image} alt="image" /></div>
          <div>
            <h1 className="font-semibold text-2xl">{ple.name}</h1>
            <div>
               {
    ple.battingStyle 
    ? <p className="font-normal text-base text-gray-600">{ple.battingStyle}</p> 

    : <p className="font-normal text-base text-gray-600">{ple.bowlingStyle}</p>
  }
            </div>
          </div>
        </div>

        <div><button onClick={()=>deletPliiyears(ple)}><span className="btn text-4xl text-red-700"><MdOutlineDeleteForever /></span></button></div>
         </div>

            </div> )
          }
        </div>
        </div>
  )
}

// playerId
// name
// country
// flag
// image
// category
// battingStyle
// biddingPrice
// runsScored


 