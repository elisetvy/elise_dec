import { Link } from "react-router-dom";

import HB from "./assets/HB.png"

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
                    <Link className="" to="https://www.linkedin.com/in/elisetvy/" target="_blank"><img className="h-10 hover:scale-105" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt="linkedin" /></Link>
                    <Link className="" to="https://github.com/elisetvy" target="_blank"><img className="h-10 hover:scale-105" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" /></Link>
                    <Link className="" to="https://calendly.com/elisetvy" target="_blank"><img className="h-10 hover:scale-105" src="https://www.insiteful.com.au/wp-content/uploads/2022/12/calendly-logo.webp" alt="calendly" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Contact;