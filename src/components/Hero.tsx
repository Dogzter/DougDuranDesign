import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";
import { FaForward } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className="py-[15px]">
      
      <div className="flex justify-center relative my-10 z-10 md:mb-36">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Magia dinâmica com <b className="text-blue-300">Next.js</b>
          </h2>
          {/* text generation effect */}
          <TextGenerateEffect className="mb-40 text-center text-[26px] md:text-4xl md:mb-[280px]" words="Transformando ideias e conceitos em experiências realistas" />

          {/* background video */}
          <video className="opacity-70 rounded-[30px] border-[rgba(0,0,0,0.5)] absolute -z-50 w-screen left-0 md:border-[10px] md:left-[10%] md:w-[80%] md:opacity-50 lg:left-[20%] lg:w-[60%] lg:opacity-40 lg:mt-20" width="320" height="240" autoPlay loop muted playsInline preload="auto">
            <source src="../videos/computer-terminal01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* intro text */}
          <p className="bgLinear01 text-center p-4 md:tacking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Oi! sou <span className='bgLinear01 text-cyan-500'> Doug Duran </span> designer digital e dev fullstack em <span className="text-yellow-200">javascript.</span> Neste espaço vou mostrar um pouco que podemos fazer no mundo sem fim desta tecnologia!
          </p>
          <ShimmerButton title={<p className='text-blue-200'>Explore mais! </p>} icon={<FaForward className='text-cyan-500' />} position="right" />
        </div>
      </div>

    </section>
  )
}
