import fotterImg from '../../assets/logo-footer.png'
import bgStyleImg from '../../assets/bg-shadow.png'
export default function Fotter() {
  return (
    <div className="w-full bg-[rgb(6,9,26)] mt-72">
     
    <div className="w-11/12 mx-auto mb-10 border border-black"> 

    <div className='p-10 rounded-4xl border-1 border-white backdrop-blur-xl bg-white/30 bg-opacity-10 mt-[-200px]'> 
 <div style={{ backgroundImage: `url(${bgStyleImg})`}}
className='w-full mx-auto h-[350px] bg-cover bg-center rounded-xl bg-white bg-no-repeat p-4 outline-20 outline-white '
>

  <div className='text-center'>
    <h1 className='font-bold text-4xl mt-24'>Subscribe to our Newsletter</h1>
    <p className='font-medium text-2xl mt-3'>Get the latest updates and news right in your inbox!</p>
  </div>

    <div className="flex justify-center items-center md:gap-4 sm:gap-1 mt-4">
     <div><input className='text-gray-600 bg-white md:w-[400px]  h-[56px] p-4 rounded-2xl border border-gray-300' type="email" name="" id="" placeholder='Enter your email' /></div>
     <div><button className="btn bg-gradient-to-r from-pink-400 via-yellow-400 to-yellow-300 text-black font-bold p-6 rounded-xl shadow-md">
  Subscribe
</button>
</div>
    </div>

    </div>
    </div>

  

  <div className='flex justify-center mb-20 mt-[100px]'><img src={fotterImg} alt="" /> </div>

        <div className="flex flex-col sm:flex-col sm:gap-12  md:flex-row md:justify-between md:items-center"
>
        <div className="">
            <h1 className='font-semibold text-[18px] text-white'>About Us</h1>
            <p className='font-normal text-base text-gray-400'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
        </div>
        <div>
            <h1 className='font-semibold text-[18px] text-white'>Quick Links</h1>
            <ul className='font-normal text-base text-gray-400 list-disc'>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <h1 className='font-semibold text-[18px] text-white'>Subscribe</h1>
            <p className='font-normal text-base text-gray-400 my-1'>Subscribe to our newsletter for the <br /> latest updates.</p>
            <div className="flex items-center">
     <div><input className='text-gray-600 bg-white w-[240px] h-[45px] p-4 rounded-bl-2xl rounded-tl-2xl border border-gray-300' type="email" name="" id="" placeholder='Enter your email' /></div>
     <div><button className="btn bg-gradient-to-r from-pink-400 via-yellow-400 to-yellow-300 text-black font-bold p-6 border-none rounded-br-2xl rounded-tr-2xl shadow-md">Subscribe</button></div>
            </div>
        </div>
       </div>
       </div>
       <hr />
    <div className='text-center border-t-1 border-gray-400 py-6'>
        <p className='font-normal text-base text-gray-400'>@2024 Your Company All Rights Reserved.</p>
    </div>
     
    </div>
  )
}

  