export default function ShimmerButton({title, icon, position, handleClick, otherClasses}: {
  title: React.ReactNode; icon?: React.ReactNode; position?: string; handleClick?: ()=>void; otherClasses?: string
}) {
  return (
    <a href='#mainGrid' onClick={handleClick} className={`${otherClasses} flex my-3 justify-center gap-2 items-center h-12 min-w-[200px] animate-shimmer rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}>
      {!position && icon}
      {title}
      {position === 'right' && icon}
    </a>
  )
}
