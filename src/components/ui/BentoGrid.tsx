import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children, }: { className?: string; children?: React.ReactNode; }) => {
  return (
    <div className={cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ", className )} >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "m-2 row-span-1 relative overflow-hidden rounded-xl group/bento hover:shadow-xl hover:border-gray-600 transition duration-200 shadow-input p-4 bg-[rgba(0,0,0,0.6)] border-[4px] border-[rgba(0,0,0,0.8)] justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <h2 className="flex items-center gap-2 font-sans font-bold text-xl mb-2 mt-2 md:text-2xl bg-gradient-to-l from-blue-500 via-green-500 to-cyan-500 text-transparent bg-clip-text">
        {icon} {title}
        </h2>
      </div>
      {header}
      <div className="font-sans font-normal text-zinc-400 md:text-xl z-10">
        {description}
      </div>
    </div>
  );
};
