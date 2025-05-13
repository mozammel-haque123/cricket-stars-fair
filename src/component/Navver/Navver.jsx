import { BsCoin } from "react-icons/bs";
import logo from '../../assets/logo.png'
export default function Navver({coin}) {
  return (
    <div className="w-11/12 mx-auto sticky top-0 z-50 backdrop-blur-xl bg-white/30 bg-opacity-10">
      <div className="flex flex-col md:flex-row justify-between items-center my-4 ">
        <div><img src={logo} alt="logo img" /></div>

        <div className='flex md:flex-row flex-col sm:gap-4 items-center md:gap-12 md:mr-24'>
            <p className="font-semibold text-base text-gray-600">Home</p>
            <p className="font-semibold text-base text-gray-600">Fixture</p>
            <p className="font-semibold text-base text-gray-600">Teams</p>
            <p className="font-semibold text-base text-gray-600">Schedules</p>
           
            <button className="btn flex items-center gap-4 text-black font-bold text-base">{coin} Coin <span className="text-amber-600 text-2xl"><BsCoin /></span></button>
        </div>
      </div>

    </div>
  )
}
