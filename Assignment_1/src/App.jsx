
import Home from "./pages/Home"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<div>Error 404 N0T FOUND</div>} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
