"use client";

import { InfiniteMovingCards } from "./ui/UiMovingCards";

export function MovingCards() {
  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={cardItems}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

function CardBody({img}: { img?: {src: string; name: string;}[]}) {
  return (
    <div className="flex flex-row justify-center gap-3 opacity-80">
      {img && img.map((item)=>(
        <div key={item.name} className="flex flex-col flex-wrap justify-center items-center content-between" >
          <img src={`/img/${item.src}`} alt={item.name} width={60} height={60} />
          <p>
            {item.name}
          </p>
        </div>
      ))}
    </div>
  )
}

const imgFiles = {
  frontEnd: [{
      src: "icon-html-01.png",
      name: "HTML 5"
    },{
      src: "icon-css-01.png",
      name: "CSS 3"
    },{
      src: "icon-javascript-01.png",
      name: "Javascript"
    },{
      src: "icon-react-02.png",
      name: "React.js"
    },
  ],
  backEnd: [{
      src: "node.js_logo-01.png",
      name: "Node.js"
    },{
      src: "icon-vitejs-logo-01.png",
      name: "Vite.js"
    },{
      src: "nextjs-logo-01.png",
      name: "Next.js"
    },{
      src: "icon-typescript-01.png",
      name: "Typescript"
    }
  ],
  dataBase: [{
      src: "mysql-logo-01.png",
      name: "MySQL"
    },{
      src: "postgre-logo-01.png",
      name: "PostgreSQL"
    },{
      src: "mongodb-logo-01.png",
      name: "mongoDB"
    }
  ],
  design: [{
    src: "Adobe_Illustrator_CC_icon.png",
    name: "Illustrator"
  },{
    src: "adobe-photoshop-logo.png",
    name: "Photoshop"
  },{
    src: "adobe-premiere-pro-logo.png",
    name: "Premiere"
  },{
    src: "aftereffects-logo-01.png",
    name: "AfterEffects"
  }
],
  design3d: [{
    src: "threejs-logo-01.png",
    name: "Three.js"
  },{
    src: "autocad-logo-02.png",
    name: "Autocad"
  },{
    src: "unreal-engine-logo-02.png",
    name: "Unreal Engine"
  },
],
  mobile: [{
  src: "react-native-01.png",
  name: "React Native"
}
],
}

const cardItems = [
  {
    header: "Front End",
    body: <CardBody img={imgFiles.frontEnd} />,
    text: "UI, client side programming..."
  }, {
    header: "Back End",
    body: <CardBody img={imgFiles.backEnd} />,
    text: "API rest, Server side programming..."
  }, {
    header: "Banco de Dados",
    body: <CardBody img={imgFiles.dataBase} />,
    text: "Cloud SQL/nonSQL database"
  }, {
    header: "Adobe Designer",
    body: <CardBody img={imgFiles.design} />,
    text: "Edição com desenho/foto/video/animação"
  }, {
    header: "Construção em 3D",
    body: <CardBody img={imgFiles.design3d} />,
    text: "Projetos e modelos em 3D"
  }, {
    header: "Mobile Apps",
    body: <CardBody img={imgFiles.mobile} />,
    text: "Aplicações para Android/IOS"
  }
]
