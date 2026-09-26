const CollectionCard = ({ collectionName = "", count = 5 }) => {
   return (
      <div className={"flex items-center justify-between w-full"}>
         <h3>{collectionName}</h3>
         <p className={"text-primary"}>{count}</p>
      </div>
   )
}
export default CollectionCard
