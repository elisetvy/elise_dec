import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "./Landing";
import Nav from "./Nav";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";

function App() {

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center px-20 py-10">
      <div className="h-full">
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App
