import { AspectRatio } from "@/components/ui/aspect-ratio.jsx"

const StatCard = ({ count = 1, legend = "Task", icon }) => {
   return (
      <AspectRatio
         ratio={1.4}
         className={
            "bg-card w-full flex justify-center items-center flex-col rounded-md border-border border-2"
         }
      >
         <h3 className={"text-4xl text-primary"}>{count}</h3>
         <div className={"flex gap-1 text-muted-foreground mt-2"}>
            <h4 className={""}>{legend}</h4>
            {/*<SavePlus size={25} />*/}
            {icon}
         </div>
      </AspectRatio>
   )
}
export default StatCard
