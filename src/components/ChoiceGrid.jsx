import React, { useState, useEffect} from 'react'
import toast from 'react-hot-toast';

const ChoiceGrid = ({ setDarkTheme }) => {
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
  const checkHash = () => {
    if (window.location.hash === "#Grid") {
      setStartAnim(true);
    }
  };

  checkHash();
  window.addEventListener("hashchange", checkHash);

  return () =>
    window.removeEventListener("hashchange", checkHash);
}, []);

    const wrongButton = () => {
        toast.custom(<div className='backdrop-blur-md border flex flex-col  items-center border-white/30 rounded-lg p-6 max-w-md shadow-lg items-center z-1 card bg-white/30 text-white px-4 py-2 rounded-lg shadow-lg'>
            <img src="/bubu-dudu-bubu-dudu-love.gif" alt="Please" className='w-32 h-32 mb-4'/>
            <h2 className='text-xl font-bold mb-2'>Choose Correct Bubu😩</h2>
            </div>);
    }

    const rightButton = () => {
        setDarkTheme(true)
    }

  return (<>
  <div className="relative inset-0 flex items-center top-[20vw] justify-center z-10">
    <h1 className={`text-white bg-pink-400 text-2xl font-bold ${startAnim ? "zoom-fade" : ""}`}>
        Choose, Which Bubu is not you?
    </h1>
  </div>
  <div className='w-screen h-screen flex items-center justify-center'>


    <section id="Grid" className={`min-h-screen  px-4 relative ${startAnim ? "blur-animate" : ""}`}>
        <div className='container relative top-40 flex flex-col  items-center z-1 card bg-white/30 justify-center backdrop-blur-md border w-[50vw] border-white/30 rounded-lg p-6 max-w-4xl mx-auto  shadow-lg'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl p-6">

        <div onClick={()=>{wrongButton()}} className="card flex items-center justify-center bg-pink-200 rounded h-50 transition-all duration-500 ease-in-out hover:scale-105">
            <img src="/foody_bubu.gif" alt="" />
        </div>

        <div onClick={()=>{wrongButton()}} className="card flex items-center justify-center bg-pink-400 rounded trans transition-all duration-500 ease-in-out hover:scale-105">
            <img src="/angry_bubu.gif" alt="" />
        </div>

        <a href='#Grid2'>
            <div onClick={()=>{rightButton()}} className="card flex items-center justify-center bg-rose-400 rounded h-50 transition-all duration-500 ease-in-out hover:scale-105">
                <img src="/loving_bubu.gif" alt="" />
            </div>
        </a>

        <div onClick={()=>{wrongButton()}} className="card flex items-center justify-center bg-[#f6e8d7] rounded transition-all duration-500 ease-in-out hover:scale-105">
            <img src="/sleepy_bubu.gif" alt="" />
        </div>

      </div>
    
        </div>
    </section>
    </div>
  </>
    
  )
}

export default ChoiceGrid
