import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import MultipalCoponent from './component/MultipalCoponent/MultipalCoponent'
import Navver from './component/Navver/Navver'
import Fotter from './component/Fotter/Fotter';

function App() {
// button color chang
  const [isActive, setActive] = useState ({
    cart: true,
    status:'cart'
  })

// button diye data pathano
const [plaiyer, setPlaiyer] = useState([])

// Banner er button er modhe coin jog kora
const [coin ,setCoin] = useState(0)

  // button color chang
  const handaleActive = (active) => {
      if(active == 'cart'){
        setActive({
      cart: true,
     status:'cart'
        })
      }else{
         setActive({
      cart: false,
     status:'about'
        })
      }
  } 

  // react-toast
  const info = () => {
  toast.success('The task was completed successfully!', {
    position: "top-center"
  });
}

const successfully = () => {
  toast.success('Player chosen successfully.!', {
    position: "top-right"
  });
}

const errorAdded = () => {
  toast.error('This player has already been added!', {
    position: "top-right"
  });
}
const sabdanError = () => {
  toast.warning('You are low on money! Please add enough money.', {
    position: "top-center"
  });
}

const deletHandale = () => {
  toast.error('Deleted successfully.', {
    position: "top-right"
  });
}

const notAdd = () => {
  toast.error('Cant add more.!', {
    position: "top-center"
  });
}

// 

// button diye data pathano
const handalePlaiyers = (cat)=>{

   const newCat = plaiyer.find((pid)=> pid.playerId === cat.playerId)
    if(plaiyer.length == 6){
   notAdd();
   return;
   }
   if(cat.biddingPrice > coin){
   sabdanError()
   }else if(newCat){
   errorAdded()
   }else{
  const newPlaiyers = [...plaiyer,cat]
  setPlaiyer(newPlaiyers)
  
  const mainasCoinTaka = coin - cat.biddingPrice;
  setCoin(mainasCoinTaka)

  successfully()
   }
 
}

const deletPliiyears = (crePle)=>{
const newPlayerId = plaiyer.filter((pd)=>pd.playerId !== crePle.playerId)
if(newPlayerId){
  const jogCoinTaka = coin + crePle.biddingPrice;
  setCoin(jogCoinTaka)
  deletHandale()
  setPlaiyer(newPlayerId)
}
}

// Banner er button er modhe coin jog kora
const coinHandle = ()=>{
 const newJogCoin = coin + 6000000;
 setCoin(newJogCoin)
}



  return (
    <>
    <Navver coin={coin}></Navver>
    <Banner coinHandle={coinHandle} info={info}></Banner>

   <div className='mt-24'> 
    <MultipalCoponent handaleActive={handaleActive} isActive={isActive} handalePlaiyers={handalePlaiyers} plaiyer={plaiyer} deletPliiyears={deletPliiyears}></MultipalCoponent>
   <ToastContainer
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>
   </div>
   <Fotter></Fotter>
    </>
  )
}

export default App
