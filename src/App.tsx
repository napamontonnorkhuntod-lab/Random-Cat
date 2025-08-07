import { BrowserRouter } from "react-router-dom";
import AppRoute from "../src/router/index";
import './App.css'

function App() {  

  return (
    <>
      <BrowserRouter>
        <AppRoute/>
      </BrowserRouter>
    </>
  )
}

export default App
