import React from 'react'
import toast from 'react-hot-toast';
import Letter from './Letter';
import { Route } from 'react-router';

const Card = () => {
   
    const buttonNo = () => {
        toast.custom(<div className='backdrop-blur-md border flex flex-col  items-center border-white/30 rounded-lg p-6 max-w-md shadow-lg items-center z-1 card bg-white/30 text-white px-4 py-2 rounded-lg shadow-lg'>
            <img src="/bubu-dudu-bubu-dudu-love.gif" alt="Please" className='w-32 h-32 mb-4'/>
            <h2 className='text-xl font-bold mb-2'>Press Yes, Bubu🥺</h2>
            </div>);
    }

    const buttonYes = () => {

      setTimeout(() => {
        const duration = 15 * 1000000000000000000000,
          animationEnd = Date.now() + duration;
        
            let skew = 1;
        
            function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
            }
        
                (function frame() {
            const timeLeft = animationEnd - Date.now(),
                ticks = Math.max(200, 500 * (timeLeft / duration));
        
                skew = Math.max(0.8, skew - 0.001);
        
                confetti({
                    particleCount: 1,
                    startVelocity: 0,
                    ticks: ticks,
                    origin: {
                    x: Math.random(),
                    // since particles fall down, skew start toward the top
                    y: Math.random() * skew - 0.2,
                    },
                    colors: ["#fffbfbff"],
                    shapes: ["heart"],
                    gravity: randomInRange(0.4, 0.6),
                    scalar: randomInRange(1.8, 2.8),
                    drift: randomInRange(-0.4, 0.4),
                });
        
                if (timeLeft > 0) {
                    requestAnimationFrame(frame);
                }
                })();
        
      }, 2000);
        
        const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["heart"],
        colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
        };

        confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2,
        });

        confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3,
        });

        confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4,
        });
        ;
        
    }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
    <section id="Card" className='px-4 relative'>
      <div className='container relative flex flex-col  items-center z-1 card bg-white/30 justify-center backdrop-blur-md border border-white/30 rounded-lg p-6 w-[50vw] max-w-4xl mx-auto shadow-lg'>
              <img src="/unnamed.gif" alt="Valentine" className='w-32 h-32 mb-4'/>
              <h2 className='text-xl font-bold mb-2'>Will You Be My Valentine?</h2>
              <div className='mb-4 flex gap-5'>
                    <a href='#Letter'> 
                        <button  onClick={(buttonYes)} className='bg-pink-500 text-white px-4 py-2 rounded'>Yes</button>
                    </a>
                        <button onClick={buttonNo} className='bg-pink-500 text-white px-4 py-2 rounded'>No</button>
              
              </div>
            </div>

    </section>
    </div>
  )
}

export default Card
