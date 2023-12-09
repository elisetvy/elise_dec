import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import Landing from "./Landing";
import Nav from "./Nav";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";

function App() {

  return (
    <div className="w-screen h-[100dvh] flex flex-col justify-center items-center px-10 py-10 bg-pink">
      <div className="w-full h-full flex flex-col justify-center gap-2">
      <BrowserRouter>
      <div className="">
        <Nav />
      </div>
      <div className="h-5/6 max-h-[600px] pb-4">
        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
      <div className="flex justify-center items-end text-center">
          <Link to="/" className="bg-yellow px-5 py-1 border border-[#010602] rounded-full text-3xl font-[#010602] box-shadow hover:scale-105">elise ngo</Link>
      </div>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App
