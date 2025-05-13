import banner from '../../assets/bg-shadow.png'
import maipic from '../../assets/banner-main.png'

export default function Banner({coinHandle,info}) {

  return (
    <div className="w-11/12 mx-auto">
     <div style={{backgroundImage:`url(${banner})`}}
     className='w-full h-[750px] bg-cover bg-center rounded-xl bg-black' 
     >
        <div className='flex flex-col justify-center items-center gap-6'>
     <div className='mt-30'><img src={maipic} alt="img" /></div>
      
      <h1 className='font-bold text-[40px] text-white mt-2'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <h3 className='font-medium text-2xl text-gray-400'>Beyond Boundaries Beyond Limits</h3>

    <div className='mt-6'> <button onClick={() => {coinHandle();info();}} className="relative inline-block px-8 py-4 font-bold text-black rounded-2xl bg-[#ecff1a] shadow-[inset_0_0_20px_#a1ff00] hover:scale-105 transition-transform duration-200">
  <span className="absolute -inset-2 rounded-2xl border border-[#ecff1a] opacity-70"></span>
  <span className="relative z-10">Claim Free Credit</span>
    </button></div>

        </div>
      
     </div>
    </div>
  )
}
