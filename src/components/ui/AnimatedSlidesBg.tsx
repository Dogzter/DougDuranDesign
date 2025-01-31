// DOUG DURAN ANIMATED GRADIENT SLIDES BACKGROUND 19/09/2024
// To work properly must need add styles below

/*
.animatedSlides {
  animation:slide 10s ease-in-out infinite alternate;
  background: linear-gradient(0deg, rgba(0,0,0,0.2)0%, rgba(255,255,255,0.5)100%), linear-gradient(-45deg, rgba(0,100,250,0.2)50%, rgba(255,255,255,0.2)50%);
  bottom:0;
  left:-50%;
  opacity:0.8;
  position:fixed;
  right:-50%;
  top:0;
  z-index:-1;
}
.animatedSlides2 {
  animation-direction:alternate-reverse;
  animation-duration:14s;
}
.animatedSlides3 { animation-duration:18s; }
@keyframes slide {
  0% { transform:translateX(-25%); }
  100% { transform:translateX(25%); }
}
*/

export default function AnimatedSlidesBg() {
  return (
    <>
      <div className="animatedSlides"></div>
      <div className="animatedSlides animatedSlides2"></div>
      <div className="animatedSlides animatedSlides3"></div>
    </>
  )
}
