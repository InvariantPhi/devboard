import { Outlet } from "react-router-dom"
import Header from "@/components/Header.jsx"

function App() {
   return (
      <div className={"bg-background"}>
         <Outlet />
      </div>
   )
}

export default App
