import Crecat from "../Crecat/Crecat";
import SlectBookMark from "../SlectBookMark/SlectBookMark";

export default function MultipalCoponent({handaleActive,isActive,
  handalePlaiyers,
  plaiyer,
  deletPliiyears
}) {

  return (
    <div className="w-11/12 mx-auto">

    <div className="flex lg:gap-[590px] sm:gap-27 items-center  sticky top-18 z-50 bg-white bg-opacity-90 backdrop-blur-md p-4 rounded-md">

        {
            
     isActive.cart ?  <div>  <p className="font-bold text-3xl">Available Players</p></div> :  <div>  <p className="font-bold text-3xl">Selected Player ({plaiyer.length}/15)</p></div>
        }


   <div>
       <button onClick={()=>handaleActive('cart')} className={`${isActive.cart ? 'btn bg-[#ecff1a]': 'btn' } font-bold text-base p-6`}>Available</button>
     <button onClick={()=>handaleActive('about')} className={`${isActive.cart ? 'btn': 'btn  bg-[#ecff1a]' } font-bold text-base p-6`}>Selected {`(${plaiyer.length})`}</button>
   </div>

    </div>


    <div className="w-12/12 mx-auto">

    
        {
            
     isActive.cart ? <Crecat handalePlaiyers={handalePlaiyers}></Crecat> : <SlectBookMark plaiyer={plaiyer} deletPliiyears={deletPliiyears}></SlectBookMark>
        }
  
    </div>

 
    </div>
  )
}
