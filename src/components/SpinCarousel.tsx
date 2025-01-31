"use client"

import React, { useEffect, useRef } from 'react';

// DOUG DURAN 3D SPIN CAROUSEL CONTAINER 10/11/2024

export default function SpinCarousel():React.ReactNode {
    
  const dragContainerRef = useRef<any>(null);
  const spinContainerRef = useRef<HTMLDivElement>(null);
  const autoRotate = true;
  const rotateSpeed = -60;
  const imgWidth = 120;
  const imgHeight = 212;
  const bgMusicURL = false;
  const bgMusicControls = false;

  useEffect(() => {
    
    const radius = 240;
    const odrag = dragContainerRef.current!;
    const ospin = spinContainerRef.current!;
    const aEle = Array.from(ospin.querySelectorAll('a, img.spinImg, video, div.embedVideo'));
    ospin.style.width = `${imgWidth}px`;
    ospin.style.height = `${imgHeight}px`;

    const ground = document.getElementById('ground')!;
    ground.style.width = `${radius * 3}px`;
    ground.style.height = `${radius * 3}px`;

    function init(delayTime?: number) {
      aEle.forEach((el: any, i) => {
        el.style.transform = `rotateY(${(i * (360 / aEle.length))}deg) translateZ(${radius}px)`;
        el.style.transition = `transform 1s`;
        el.style.transitionDelay = delayTime ? `${delayTime}s` : `${(aEle.length - i) / 4}s`;
      });
    }
    
    let tX = 0, tY = 10, sX = 0, sY = 0, desX = 0, desY = 0;

    function applyTransform(obj: HTMLElement) {
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;
      obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    }    
    
    if(autoRotate) {
      ospin.style.animation = `${rotateSpeed > 0 ? 'spin' : 'spinRevert'} ${Math.abs(rotateSpeed)}s infinite linear`;
    }
    
    if(bgMusicURL) {
      const audioElement = document.createElement('audio');
      audioElement.src = bgMusicURL;
      audioElement.controls = bgMusicControls;
      audioElement.autoplay = true;
      audioElement.loop = true;
      document.getElementById('music-container')?.appendChild(audioElement);
    }

    document.onpointerdown = (e) => {
      clearInterval(odrag.timer);
      sX = e.clientX;
      sY = e.clientY;

      document.onpointermove = (e) => {
        const nX = e.clientX;
        const nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(odrag);
        sX = nX;
        sY = nY;
      };

      document.onpointerup = () => {
        odrag.timer = setInterval(() => {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTransform(odrag);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(odrag.timer);
          }
        }, 17);
        document.onpointermove = document.onpointerup = null;
      };
      return false;
    };

    /* document.onwheel = (e: unknown) => {
      radius += (e as WheelEvent).deltaY / 10;
      init(1);
    }; */

    setTimeout(init, 4000); // start spin

    return () => {
      document.onpointerdown = null;
      document.onpointermove = null;
      document.onpointerup = null;
      // document.onwheel = null;
    };
  }, []);

  return (
    <section id='spinCarousel'>
      <div id="drag-container" ref={dragContainerRef} >
        <div id="spin-container" ref={spinContainerRef} >

          {/* spin carousel items */}
          
          <img title='Fullstack javaScript com NEXT.js' className='spinImg' src="img/spinContainer-01.jpg" alt="Tecnologia com NEXT.js" />

          <a title='clique para expandir imagem' href="/img/spinContainer-04.jpg" target="_blank" rel="noopener noreferrer">
            <img src="/img/spinContainer-04.jpg" alt="img" width={120} height={212} />
          </a>

          <video title='Edição de video profissional' width="120" height="212" muted controls autoPlay loop preload='auto'>
            <source src="/videos/spin_video-09.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <img title='API rest e banco de dados' className='spinImg' src="img/spinContainer-06.jpg" alt="API rest e banco de dados" />

          <video title='Criando com AutoCad 3D' width="120" height="212" muted controls autoPlay loop preload='auto'>
            <source src="/videos/spin_video-05.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <video title='Ken Block Gymkhana Challenge' width="120" height="212" muted controls autoPlay loop preload='auto'>
            <source src="/videos/spin_video-04.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <img title='Mobile Apps com React Native' className='spinImg' src="img/spinContainer-07.png" alt="Mobile Apps com React Native" />

          <video title='Criando com Unreal engine 4' width="120" height="212" muted controls autoPlay loop preload='auto'>
            <source src="/videos/spin_video-07.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <a title='clique para expandir imagem' href="/img/spinContainer-03.jpg" target="_blank" rel="noopener noreferrer">            
            {/* image with link */}
            <img src="/img/spinContainer-03.jpg" alt="img" width={120} height={212}  />
          </a>

          {/* <iframe width={120} height={170} src="https://www.youtube.com/embed/QFwJJywzbDs?si=gG1eTd9ORf6QoBxM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> */}
          
          <div className='innerContent'>
            {/* center logo */}
            <img className='spinLogo opacity-80' src="img/logo-dougduran.png" alt="logo" />
            {/* center text */}
            {/* <p>{`Doug.Duran([...dev])`}</p> */}
          </div>


        </div>
        <div id="ground"></div>
      </div>
      <div id="music-container"></div>
    </section>
  );
};

// COMPONENT CSS STYLES
/* 

section#spinCarousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin: 0;
  padding: 0;
  height: 70vh;
  touch-action: none;
  -webkit-perspective: 500px;
  perspective: 1000px;
}

section#spinCarousel * {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
#drag-container, #spin-container {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: auto;
  -webkit-transform: rotateX(-25deg);
  transform: rotateX(-0deg);
}
#spin-container a, #spin-container .innerContent, #spin-container a img, #spin-container img.spinImg, #spin-container video, #spin-container iframe {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 200px;
  font-size: 50px;
  text-align: center;
}
#spin-container a, #spin-container img.spinImg, #spin-container video, #spin-container iframe {
  border: 1px solid #fff;
  box-shadow: 0 0 10px #fff;
  -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
}
#spin-container a:hover, #drag-container img:hover, #drag-container video:hover, #drag-container iframe:hover {
  border: 1px solid #0ff;
  box-shadow: 0 0 15px #0ff;
  -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0008);
}
#drag-container div.innerContent p {
  position: absolute;
  top: 100%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%) rotateX(90deg);
  transform: translate(-50%,-50%) rotateX(90deg);
  color: #fff;
  width: 100%;
  height: 100%;
}
section#spinCarousel #ground {
  width: 900px;
  height: 900px;
  position: absolute;
  top: 100%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%) rotateX(90deg);
  transform: translate(-50%,-50%) rotateX(90deg);
  background: -webkit-radial-gradient(center center, farthest-side , rgba(200,200,200,0.2), transparent);
}
#music-container {
  position: absolute;
  top: 0;
  left: 0;
}
@media screen and (min-width: 1280px) {
  section#spinCarousel {
    -webkit-perspective: 450px;
    perspective: 450px;
  }
  #drag-container, #spin-container {
    -webkit-transform: rotateX(-25deg);
    transform: rotateX(-0deg);
  }
}

@-webkit-keyframes spin {
  from{
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  } to{
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}

@keyframes spin {
  from{
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  } to{
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}
@-webkit-keyframes spinRevert {
  from{
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  } to{
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
}
@keyframes spinRevert {
  from{
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  } to{
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
}

*/