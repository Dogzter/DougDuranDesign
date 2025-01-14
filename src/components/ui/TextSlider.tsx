// ANIMATED TEXT BACKGROUND SLIDER 27/09/24 

/*
.textSlider {
  background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: aitf 300s linear infinite;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  -webkit-text-stroke: 1px #fff;
}
@keyframes aitf {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
*/

export default function TextSlider ({textNormal,textSlider}:{textNormal?: string, textSlider:string}): React.ReactElement {

  return (
    <p style={{userSelect: 'none'}}>
      {textNormal} 
      <span className="textSlider">{textSlider}</span>
    </p>
  )
}
