import {
   Progress,
   ProgressLabel,
   ProgressValue,
} from "@/components/ui/progress"

const LearningProgress = ({ progress = 80, course = "React" }) => {
   return (
      <Progress value={progress} className="w-full max-w-sm">
         <ProgressLabel className={"font-semibold"}>{course}</ProgressLabel>
         <ProgressValue className={"text-primary"} />
      </Progress>
   )
}
export default LearningProgress
