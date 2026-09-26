import { Badge } from "@/components/ui/badge"

const RecentsCard = ({
   resource = "React",
   status = "In Progress",
   format = "Article",
   statusVariant = "secondary",
}) => {
   return (
      <div className={"grid grid-cols-3 items-center gap-5 mb-1"}>
         <h3>{resource}</h3>
         <h3>{format}</h3>
         <Badge variant={statusVariant}>{status}</Badge>
      </div>
   )
}
export default RecentsCard
