import { Link } from "react-router-dom";

import HB from "./assets/HB.webp"
import LinkedIn from "./assets/LinkedIn.webp"
import GitHub from "./assets/GitHub.webp"
import Calendly from "./assets/Calendly.webp"

function Contact() {

    return (
        <div className="max-w-[425px] h-full flex flex-col justify-between items-center gap-4">
            <div className="relative flex-1 h-[50px] w-full border border-[#010602]">
                <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#4fa6e1] border border-[#010602]"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#4fa6e1] border border-[#010602]"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#4fa6e1] border border-[#010602]"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#4fa6e1] border border-[#010602]"></div>
                <img className="h-full w-full object-cover" src={HB} alt="elise" />
            </div>
            <div className="flex-0 h-fit bg-white drop-shadow-md text-center px-4 py-4">
                <div className="font-bold text-xl">I would <span className="text-[#f94355]">love</span> to connect.</div>
                <div className="mt-2 mb-4 text-sm">Please feel free to reach out to me on one of my socials, book a chat with me on Calendly, or <Link to="mailto:elisetvy@gmail.com" className="underline hover:text-[#f94355]">shoot me an email</Link>!</div>
                <div className="flex justify-center gap-4">
                    <Link className="" to="https://www.linkedin.com/in/elisengo/" target="_blank"><img className="h-10 hover:scale-105" src={LinkedIn} alt="linkedin" /></Link>
                    <Link className="" to="https://github.com/elisetvy" target="_blank"><img className="h-10 hover:scale-105" src={GitHub} alt="github" /></Link>
                    <Link className="" to="https://calendly.com/elisengo" target="_blank"><img className="h-10 hover:scale-105" src={Calendly} alt="calendly" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Contact;