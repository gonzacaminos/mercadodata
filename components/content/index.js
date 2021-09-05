import  React, {useState, useEffect}  from 'react';
import { Reveal, Tween } from 'react-gsap';

export default function Content() {


  const FadeInRight = ({ children }) => (
    <Tween
      from={{ opacity: 0, transform: 'translate3d(0vh, 0, 0)' }}
      ease="back.out(1.4)"
    >
      {children}
    </Tween>
  );

  
  return (
    <Reveal trigger={<div />}>
      <FadeInRight>
        <div className="px-5 py-20 md:p-20 max-w-xl mx-auto">
            <h2 className="font-black text-astronaut mb-8 text-center text-xl">¿Qué es este sitio?</h2>
            <p className="text-astronaut text-base text-center">
                <p>Este sitio nace de una necesidad simple: <strong>conocer mas un producto antes de comprarlo.</strong> La mayoría de estos datos (salvo la fecha de creación/modificación) están disponibles en la página del producto pero a veces resulta difícil encontrarlos. </p> 
                <p className="mt-2">Este sitio hace uso de la <a className="underline" target="_blank" href="https://developers.mercadolibre.com.ar/"> API de MercadoLibre </a></p>
            </p>
        </div>
      </FadeInRight>
    </Reveal>
    
  )
}