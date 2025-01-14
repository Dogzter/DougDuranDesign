import SpinCarousel from "./SpinCarousel";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";
import MainGrid from "./mainGrid";
import { FaForward } from 'react-icons/fa'
import Technologies from "./Technologies";

export default function HomePage() {
  
  return (
    <div className="min-h-[800px]">      

      <div className="flex flex-col justify-center items-center">
        {/* <Herodiv /> */}
        <h2 className="uppercase tracking-widest text-xs text-center text-blue-100">
          Magia dinâmica com <b className="text-blue-300">Next.js</b>
        </h2>
        {/* text generation effect */}
        <TextGenerateEffect className="-mb-24 text-center text-[26px] md:text-4xl" words="Transformando ideias e conceitos em experiências realistas" />
      </div>

      <SpinCarousel />

      <div className="max-w-[1440px] m-auto -mt-24 md:-mt-5">
        {/* intro text */}
        <p className="bgLinear01 text-center p-4 md:tacking-wider text-sm md:text-lg lg:text-2xl">
          Oi! sou <span className='bgLinear01 text-yellow-500 text-xl'> Doug Duran </span> designer digital e dev fullstack em <span className="text-yellow-200">javascript.</span> Neste espaço vou mostrar um pouco que podemos fazer no mundo sem fim desta tecnologia!
        </p>
        <ShimmerButton otherClasses="max-w-[250px] m-auto" title={<p className='text-blue-200'>Explore mais! </p>} icon={<FaForward className='text-cyan-500' />} position="right" />

      </div>

      <MainGrid />

      <Technologies />

    </div>
  );
}
