import {react, useState, useEffect} from 'react'
import {Heart} from 'lucide-react'
import { UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from 'react-router';


const Background = () => {
  const [hearts, setHearts] = useState([]);
  const [emos, setEmos] = useState([]);

     
     useEffect(()=>{
        generateHearts();
        generateEmos();

        const handleResize = () => {
            generateHearts();
            generateEmos();
        };
        window.addEventListener("resize", handleResize);
        return () => (window.removeEventListener("resize", handleResize))
     }, []);


     const generateHearts = () => {
        const numberOfHearts = Math.floor(
            ((window.innerHeight * window.innerWidth)/25000)
        );

        const newHearts = [];

        for(let i =0 ; i<numberOfHearts ;i++){
            newHearts.push({
                id: i,
                x: Math.random(1) * window.innerWidth,
                y: Math.random(1) * window.innerHeight,
                duration: 6 + Math.random() * 6, 


            })
        }


        setHearts(newHearts);
     }

     const generateEmos= () => {
        const numberOfEmos = Math.floor(
            ((window.innerHeight * window.innerWidth)/25000)
        );

        const newEmos = [];

        for(let i =0 ; i<numberOfEmos ;i++){
            newEmos.push({
                id: i,
                x: Math.random(1) * window.innerWidth,
                y: Math.random(1) * window.innerHeight,

                

            })
        }

        setEmos(newEmos);
     }

     return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

        {hearts.map((heart) => (
            <img
            key={heart.id}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                padding: 3,
                transform: `translate(${heart.x}px, ${heart.y}px)`,
                color: "red",
                filter: "drop-shadow(0 0 6px red)",

                
            }}
            size={30}
            />
        ))}

        {emos.map((emo) => (
            <span
            key={emo.id}
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            fontSize: "24px",
            transform: `translate(${emo.x}px, ${emo.y}px)`,
            textShadow: "0 0 8px red",
            }}
            >
            ❤️
            </span>
        ))}

        </div>

  )
}



export default Background
