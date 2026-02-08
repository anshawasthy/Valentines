import React, { useState, useEffect, use} from 'react'
import toast from 'react-hot-toast';
import { RotateCcw } from 'lucide-react';
const Game = () => {
    const [startAnim, setStartAnim] = useState(false);
    let [autoChoice, setAutoChoice] = useState(0);
    let [userChoice, setUserChoice] = useState(0);
    let [userPoint, setUserPoint] = useState(0);
    let [sysPoint, setSysPoint] = useState(0);

    const icons = [
      "/rock.png",
      "/paper.png",
      "/scissor.png"
    ]

  useEffect(() => {
  const checkHash = () => {
    if (window.location.hash === "#Game") {
      setStartAnim(true);
    }
  };

  checkHash();
  window.addEventListener("hashchange", checkHash);

  return () =>
    window.removeEventListener("hashchange", checkHash);
}, []);

  const shuSha = (selectedUserChoice) => {
    const systemChoice = Math.floor(Math.random() * 3);
    setAutoChoice(systemChoice);
    setUserChoice(selectedUserChoice);

    if (systemChoice === selectedUserChoice) return;

    let newSys = sysPoint;
    let newUser = userPoint;

    if (
      (systemChoice === 0 && selectedUserChoice === 2) ||
      (systemChoice === 1 && selectedUserChoice === 0) ||
      (systemChoice === 2 && selectedUserChoice === 1)
    ) {
      newSys += 1;
      setSysPoint(newSys);
    } else {
      newUser += 1;
      setUserPoint(newUser);
    }

    if (newSys >= 3) {
      toast.custom(
        <div className='backdrop-blur-md border flex flex-col items-center border-white/30 rounded-lg p-6 w-[45vw] shadow-lg bg-white/30 text-white'>
          <img src="/loving_bubu.gif" className='w-32 h-32 mb-4'/>
          <h2 className='text-xl font-bold'>Doesn't Matter my baby always WINS😘🥳</h2>
        </div>
      );
    }
    else if (newUser >= 3) {
      toast.custom(
        <div className='backdrop-blur-md border flex flex-col items-center border-white/30 rounded-lg p-6 w-[45vw] shadow-lg bg-white/30 text-white'>
          <img src="/loving_bubu.gif" className='w-32 h-32 mb-4'/>
          <h2 className='text-xl font-bold'>YAYY KHUSHU JEET GYI😘🥳</h2>
        </div>
      );
    }
};


    

  return (<>
  <div className="relative inset-0 flex items-center top-[20vw] justify-center z-10">
    <h1 className={`text-white bg-pink-400 text-2xl font-bold ${startAnim ? "zoom-fade" : ""}`}>
        So lets, play a small game now Baby!
    </h1>
  
  </div>
  <div className='w-screen h-screen flex items-center justify-center'>


    <section id="Game" className={`min-h-screen  px-4 relative ${startAnim ? "blur-animate" : ""}`}>
        <div className='container relative top-40 flex flex-col  items-center z-1 card bg-white/30 justify-center backdrop-blur-md border w-[60vw] border-white/30 rounded-lg p-6 max-w-4xl mx-auto  shadow-lg'>
          <div className='flex flex-col items-center w-[40vw] bg-pink-200'>
            <h1 className='p-10 text-3xl'>Khelo Bubu😘</h1>
            <div className='flex items-center justify-between w-[40vw] pb-10'>
              <div className='pl-10'>
                <img className='h-50' src={icons[autoChoice]} alt="" />
              </div>
              <div>
                <img className='h-50' src={icons[userChoice]} alt="" />
              </div>
              <div className='mr-10 border-2 rounded-2xl flex items-center flex-col'>
                <h2 className='m-2'>Choose:</h2>
                <img onClick={()=>{shuSha(0)}} className='h-20 p-2' src={icons[0]} alt="" />
                <img onClick={()=>{shuSha(1)}} className='h-20 p-2' src={icons[1]} alt="" />
                <img onClick={()=>{shuSha(2)}} className='h-20 p-2' src={icons[2]} alt="" />
              </div>
            </div>
            <div className='flex items-center w-55 justify-between pb-10'>
              <h1 className='text-2xl'>Points: {sysPoint}-{userPoint}</h1>
              <RotateCcw onClick={()=>{setSysPoint(0);setUserPoint(0)}} />
            </div>
          </div>
        </div>
    </section>
    </div>
  </>
    
  )
}

export default Game
