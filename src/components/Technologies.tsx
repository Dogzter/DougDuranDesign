import { MovingCards } from "./MovingCards";


export default function Technologies() {
  return (
    <div className="py-20">
      <h2 className="text-xl text-center md:text-3xl">
        <span className="text-purple-300">Principais</span> {' '}
        tecnologias e ferramentas de trabalho
      </h2>     

      <div className="mt-2">
        <MovingCards />
      </div>

    </div>
  )
}
