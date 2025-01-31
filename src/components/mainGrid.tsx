import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Globo3D from "./Globo3D";
import { FaHome, FaCog, FaFeatherAlt } from 'react-icons/fa'
import { PiCodeFill } from "react-icons/pi";
import { BsChatLeftText } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
// import FordRanger3D from "@/threejs/FordRanger3D";

/* const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-black">
  </div>
); */

const Header = ({heroImg, img1, img2, bgImg}: {heroImg?: string, img1?: string, img2?: string, bgImg?: string})=> (
  <div className="relative">
    <div className="flex gap-4">
      {heroImg && <img className="opacity-50 rounded-xl" src={heroImg} alt="header" width={250} height={250} />}
      {img1 && <img className="opacity-50" src={img1} alt="header" width={100} height={100} />}
      {img2 && <img className="opacity-50" src={img2} alt="header" width={100} height={100} />}
    </div>
    {bgImg && <img className="opacity-10 absolute -top-14 right-0 w-[200px] rounded-xl" src={bgImg} alt="header_bg" width={100} height={100} />}
  </div>
)
const Video = ({ videoSrc }: { videoSrc: string})=> (
  <div>
    <img width={220} height={220} src="/img/nextjs-logo-01.png" alt="video_img" />
    <video className="absolute bottom-0 right-0 opacity-50 -z-10" title='Edição de video profissional' width="500" height="500" muted autoPlay loop preload='auto'>
      <source src={videoSrc} type="video/mp4" />
    </video>
  </div>
)

const items = [
  {
    title: "Um breve resumo...",
    description: "Sempre gostei bastante de informática e basicamente tudo começou ali ainda criança em um AMD K6-2 800mhz com 32mb de memória em 1998. Daí pra frente foi uma aventura que dura até hoje explorando esse mundo sem fim da tecnologia e inovação. Mesmo formado em Administração me expandi ainda mais na informática como técnico, designer e desenvolvedor  ",
    header: <Header img1='/img/k6-pc-01.png' bgImg="/img/doug_avatar10.jpg" />,
    className: "md:col-span-3",
    icon: <BsChatLeftText className="text-yellow-500 opa" />,
  },
  {
    title: "Nascimento da inovação com NEXT.js",
    description: "Acredito que você ja deve ter ouvido falar desse novo framework de react. Depois de conhecer essa poderosa ferramenta resolvi deixar o PHP para trás e entrar de cabeça nessa revolução do javascript!",
    header: <Video videoSrc='/videos/computer-terminal02.mp4' />,
    className: "md:col-span-2 relative",
    icon: <PiCodeFill className="text-yellow-300"/>,
  },
  {
    title: "Fullstack com javascript",
    description: "Imagine fazer qualquer aplicação completa robusta e profissional usando apenas uma única linguagem de programação... javascript foi o passado é o presente e certamente o futuro",
    header: <Header img1='/img/mobile-app-img-01.png' img2='/img/icon-react-01.png' bgImg="/img/icon-javascript-01.png" />,
    className: "md:col-span-1",
    icon: <FaCog className="text-yellow-300"/>,
  },
  {
    title: "Administrador",
    description: "Bacharel em Administração pela Universidade Estadual de Maringá.",
    header: <Header img1='/img/uem_logo-02.png' bgImg="/img/uem_logo-02.png" />,
    className: "md:col-span-1",
    icon: <MdOutlineWork className="text-yellow-300"/>,
  },
  {
    title: "Por que Administração?",
    description: "A administração é universal, combina e se encaixa com tudo inclusive com informação, inovação e tecnologia. Eu sentia que apenas informação e tecnologia por si só não era um pacote completo.",
    header: <Header heroImg='/img/business-02.jpg' bgImg="/img/business-03.jpg" />,
    className: "md:col-span-2",
    icon: <MdOutlineWork className="text-yellow-500" />,
  },
  {
    title: "A Arte do design",
    description: "Criar arte digital é somar criatividade com tecnologia. Photoshop, Ilustrator, Premiere, After Effects é onde podemos explorar foto, animação e vídeo tudo isso ao máximo",
    header: <Header heroImg='/img/design-01.jpg' bgImg="/img/design-03.jpg" />,
    className: "md:col-span-2",
    icon: <FaFeatherAlt className="text-yellow-500" />,
  },
  {
    title: "Three.js - 3D em Javascript",
    description: "A inovação não para apenas em gerar componentes básicos com React. Com Three.js podemos criar um multiverso 3D apenas com javascript!",
    header: <Globo3D />,
    className: "md:col-span-1",
    icon: <FaHome className="text-yellow-500" />,
  },
  {
    title: "Pronto para o Marketing Digital?",
    /* description: "Falando em comunicação esse é um momento ideal pra entrar em contato. Explorar ideias? estudar projetos e falar de trabalho? Claro vai ser interessante e emocionante! Clique no Whatsapp ou Messenger no canto da tela pra gente bater um papo", */
    description: "Marketing Digital é sobretudo criatividade e estretégia, é desafiador e poderoso... É o tipo de trabalho que envolve muita energia humana isso o torna ainda mais especial. AIDAR é a estratégia que mais gosto mas como sabemos no mundo da internet a inovação nunca para.",
    header: <Header heroImg='/img/marketing-02.jpg' bgImg="/img/marketing-01.jpg" />,
    className: "md:col-span-3",
    icon: <FaHome className="text-yellow-500" />,
  },
  /* {
    title: "A revolução em 3D",
    description: "Mergulhe de cabeça no poder de imersão e realismo com Unreal Engine, Autocad, Blender e Three.js. Recrie o universo com tecnologia totalmente em 3D dentro do seu programa",
    header: <FordRanger3D />,
    className: "md:col-span-3 min-h-[800px]",
    icon: <FaHome className="text-yellow-500" />,
  }, */
];

export default function MainGrid() {
  return (
    <section id="mainGrid">
      <BentoGrid className="max-w-[1500px] mx-auto md:auto-rows-[22rem]">
        {items.map((item, i) => (
          <BentoGridItem key={i} title={item.title} description={item.description} header={item.header} className={item.className} icon={item.icon} />
        ))}
      </BentoGrid>
    </section>
  );
}
