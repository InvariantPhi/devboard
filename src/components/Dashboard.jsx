import { CheckCheck, SavePlus, BellDot, BookOpenText } from "lucide-react"
import StatCard from "@/components/StatCard.jsx"
import LearningProgress from "@/components/LearningProgress.jsx"
import { AspectRatio } from "@/components/ui/aspect-ratio.jsx"
import CollectionCard from "@/components/CollectionCard.jsx"
import RecentsCard from "@/components/RecentsCard.jsx"
const Dashboard = () => {
   const statCardData = [
      {
         count: 13,
         legend: "Saved",
         icon: <SavePlus />,
      },
      {
         count: 3,
         legend: "Unread",
         icon: <BellDot />,
      },
      {
         count: 9,
         legend: "Learning",
         icon: <BookOpenText />,
      },
      {
         count: 1,
         legend: "Completed",
         icon: <CheckCheck />,
      },
   ]

   const continueLearningData = [
      {
         progress: 56,
         course: "React JSX",
      },
      {
         progress: 32,
         course: "Flutter",
      },
      {
         progress: 81,
         course: "Laravel",
      },
   ]

   const collectionData = [
      {
         collectionName: "React JS",
         count: 18,
      },
      {
         collectionName: "Flutter",
         count: 7,
      },
      {
         collectionName: "Premier Pro",
         count: 9,
      },
   ]

   const recentsData = [
      {
         resource: "React",
         format: "Video",
         status: "In Progress",
         statusVariant: "secondary",
      },
      {
         resource: "SpringBoot",
         format: "Article",
         status: "Completed",
         statusVariant: "default",
      },
      {
         resource: "PyTorch",
         format: "Lesson",
         status: "Unread",
         statusVariant: "destructive",
      },
   ]
   return (
      <div className={"text-foreground"}>
         <nav>
            <h2 className={"text-3xl"}>Dashboard</h2>
            <h4 className={"text-primary text-xl"}>Welcome Back</h4>
            <p className={"text-muted-foreground"}>
               Here is all the happenings with your resources
            </p>
         </nav>
         <hr className={"mt-2"} />
         <main className={"mt-5"}>
            <div className={"grid grid-cols-2 gap-2 place-items-center"}>
               {statCardData.map(({ count, legend, icon }) => {
                  return (
                     <StatCard
                        count={count}
                        icon={icon}
                        legend={legend}
                        key={legend}
                     />
                  )
               })}
            </div>

            <div className={"mt-4"}>
               <AspectRatio
                  ratio={16 / 9}
                  className={
                     "px-3 py-3 bg-card border-2 border-border rounded-md"
                  }
               >
                  <h3 className={"text-2xl text-foreground"}>
                     Continue Learning
                  </h3>
                  <div
                     className={
                        "mt-3 flex items-center justify-center flex-col gap-3"
                     }
                  >
                     {continueLearningData.map(({ course, progress }) => {
                        return (
                           <LearningProgress
                              course={course}
                              progress={progress}
                              key={course}
                           />
                        )
                     })}
                  </div>
               </AspectRatio>
               <AspectRatio
                  className={
                     "px-3 py-3 bg-card border-2 border-border rounded-md mt-4"
                  }
               >
                  <h3 className={"text-2xl text-foreground"}>Resources</h3>
                  <div
                     className={
                        "mt-3 flex items-center justify-between flex-col gap-3 w-full"
                     }
                  >
                     {collectionData.map(({ collectionName, count }) => {
                        return (
                           <CollectionCard
                              key={collectionName}
                              collectionName={collectionName}
                              count={count}
                           />
                        )
                     })}
                  </div>
               </AspectRatio>

               <AspectRatio
                  className={
                     "px-3 py-3 bg-card border-2 border-border rounded-md mt-4 flex  flex-col justify-between"
                  }
               >
                  <h3 className={"text-2xl text-foreground"}>Recently Added</h3>
                  <div className={"grid grid-cols-3 items-center mt-3 gap-5"}>
                     <h3>Resource</h3>
                     <h3>Format</h3>
                     <h3>Progress</h3>
                  </div>
                  {recentsData.map(
                     ({ resource, format, status, statusVariant }) => {
                        return (
                           <RecentsCard
                              key={resource}
                              resource={resource}
                              format={format}
                              status={status}
                              statusVariant={statusVariant}
                           />
                        )
                     }
                  )}
               </AspectRatio>
            </div>
         </main>
      </div>
   )
}
export default Dashboard
