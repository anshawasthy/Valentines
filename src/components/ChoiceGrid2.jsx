import React, { useState, useEffect} from 'react'
import toast from 'react-hot-toast';

const ChoiceGrid2 = ({ setDarkTheme }) => {
  const [startAnim, setStartAnim] = useState(false);
  const [allButton, setAllButton] = useState(false);

  useEffect(() => {
  const checkHash = () => {
    if (window.location.hash === "#Grid2") {
      setStartAnim(true);
    }
  };

  checkHash();
  window.addEventListener("hashchange", checkHash);

  return () =>
    window.removeEventListener("hashchange", checkHash);
}, []);

    const Button = () => {
        toast.custom(<div className='backdrop-blur-md border flex flex-col  items-center border-white/30 rounded-lg p-6 max-w-md shadow-lg items-center z-1 card bg-white/30 text-white px-4 py-2 rounded-lg shadow-lg'>
            <img src="/bubu-sleeping-dudu-carry.gif" alt="Please" className='w-32 h-32 mb-4'/>
            <h2 className='text-xl font-bold mb-2'>Meh toh sare hi hu</h2>
            </div>);
        setTimeout(() => {
            setDarkTheme(false);
            window.location.href = "#Game"
        }, 2000);    
    }

  return (<>
  <div className="relative inset-0 flex items-center top-[20vw] justify-center z-10">
    <h1 className={`text-white mask-fade-all p-15 bg-gray-600 text-2xl font-bold ${startAnim ? "zoom-fade" : ""}`}>
        Choose, Which Dudu I am?
    </h1>
  </div>
  <div className='w-screen h-screen flex items-center justify-center'>


    <section id="Grid2" className={`min-h-screen  px-4 relative ${startAnim ? "blur-animate" : ""}`}>
        <div className='container relative top-40 flex flex-col  items-center z-1 card bg-white/30 justify-center backdrop-blur-md border w-[50vw] border-white/30 rounded-lg p-6 max-w-4xl mx-auto  shadow-lg'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl p-6">

        <div onClick={()=>{Button()}} className="card flex items-center justify-center bg-gray-400 rounded h-50 transition-all duration-500 ease-in-out hover:scale-105">
            <img className='h-40' src="/loving_dudu.gif" alt="" />
        </div>

        <div onClick={()=>{Button()}} className="card flex items-center justify-center  bg-gray-900   rounded trans transition-all duration-500 ease-in-out hover:scale-105">
            <img className='h-40' src="/dancing_dudu.gif" alt="" />
        </div>

        <div onClick={()=>{Button()}} className="card flex items-center justify-center bg-gray-700 rounded h-50 transition-all duration-500 ease-in-out hover:scale-105">
            <img className='h-40'  src="/more_loving_dudu.gif" alt="" />
        </div>
        

        <div onClick={()=>{Button()}} className="card flex items-center justify-center bg-black  rounded transition-all duration-500 ease-in-out hover:scale-105">
            <img className='h-40' src="/baby_dudu.gif" alt="" />
        </div>


      </div>
    
        </div>

        
    </section>

    
    </div>
    
  </>
    
  )
}

export default ChoiceGrid2
