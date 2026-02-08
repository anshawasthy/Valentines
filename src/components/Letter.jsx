import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Letter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    
    
  return (
        <div className='w-screen h-screen flex items-center justify-center'>
    <section id='Letter' className="px-4 relative min-h-screen">
       {isOpen?(

            <div className='container relative flex flex-col  items-center z-1 card bg-white/30 justify-center backdrop-blur-md border border-white/30 rounded-lg p-6 max-w-4xl mx-auto shadow-lg'>

                <div className='relative w-200 letter' >
                    <div className='flex items-center'>
                        <img className='w-24' src='/images.png'/>
                        <h1 className='text-4xl ml-10' >To My Bugu...</h1>
                    </div>
                    <div className='p-14'>
                        <p>A very happy valentines day to you my bubu, I really really love you a lot, I don’t have enough words to express my love for you, that’s why I try to show it by these efforts and these efforts are also not enough to show it.</p>

                        <p>With Valentines day today, it’s the completion of first year of us together or should I say it’s been a year since we’ve met. and I have enjoyed everyday with you and would be enjoying upcoming days also. </p>
                        <p>So so much grateful to the god for sending you in my life and that’s really what I needed the most, i.e. my home person, the one who fills me, the one who has trust and confidence on me even at those point of times where even I don’t have them on myself</p>

                        <p>Still, likh likh ke bhi kitna hi likh lunga, jab words can not express the amount of love, I have for you.</p>

                        <p>So on this day, i pray, and manifest may god bless us and our bond stays unshakeable.</p>
                        
                        <h5>I LOVE YOU MY JAAN, BUGU, BUBU, KHUSHU, SUGARPLUM, STRAWBERRY ❤️🌎</h5>
                    </div>

                    <div className='flex items-center flex-row'>
                    <a href='#Grid'>
                            <img className='w-24 ml-140' src='/bubu-bubu-dudu-dudu.gif'/>

                    </a>

                    </div>
                </div>
            </div>
        ):
        (
            
            <div className='container relative flex flex-col top-70 items-center z-1 card bg-white/30 justify-center backdrop-blur-md border border-white/30 rounded-lg p-6 max-w-3xl mx-auto shadow-lg'>
                <div className='relative transition-all duration-1000 flex flex-col items-center w-150 letter' >
                        <img className='w-24' src='/dudu-dudu-bubu.gif'/>
                        <button onClick={() => setIsOpen(true)}  className='bg-[rgb(246,238,219)] font-[chango] text-4xl border-2 border-pink-300 mt-5 text-pink-400 px-4 py-2 rounded-lg'>Bubu Click Here😋</button>
                </div>
            </div>

        )}
    </section>
    </div>
  )
}

export default Letter
