import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import { Fade } from "react-awesome-reveal";
import img1 from '../assets/img/large.jpg'
import img2 from '../assets/img/camion.jpg'
export const TextAnimated = () => {
/* Elemento para probar y dar mas efecto a paginas */
    return (
        <ParallaxProvider>
        <div className='bg-white h-[2000px]'>
            <Fade cascade damping={0.1}>
                <p>I enter first...</p>
                <p>...then comes my turn...</p>
                <p>...and finally you see me!</p>
            </Fade>
            <Parallax speed={-5}>
                <div className="slow">
                    <img src={img1} alt="" /></div> 
            </Parallax>
            <Parallax speed={5}>
                <div className="fast">
                <img src={img2} alt="" />
                    </div> 
            </Parallax>

        </div>
        </ParallaxProvider>
    )
}

