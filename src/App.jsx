import { Outlet } from "react-router"
import NavBar from "./components/NavBar"
import { GeneralViewProvider } from "./context/GeneralViewContext"
import { Continainer } from "./StyleComponents/container"

const App = () => {
  
  return (
    <div className="App">
      <NavBar/>
      <Continainer>
        <GeneralViewProvider>
          <Outlet/>
        </GeneralViewProvider>
      </Continainer>
    </div>
  )
}

export default App
