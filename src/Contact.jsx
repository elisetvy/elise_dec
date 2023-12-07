import { Link } from "react-router-dom";

function Contact() {

    return (
        <div className="h-full flex justify-center items-center">
            <div className="relative border border-black bg-white px-4 py-4">
                <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-yellow border border-black"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-yellow border border-black"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-yellow border border-black"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-yellow border border-black"></div>
                <div className="h-full flex flex-col justify-center items-center gap-4">
                    <div className="text-center">
                        <div className="font-black text-xl">I would <span className="text-[#f94355]">love</span> to connect.</div>
                        <div className="mt-4">Please feel free to reach out to me on one of my socials, book a chat with me on Calendly, or <Link to="mailto:elisetvy@gmail.com" className="underline hover:text-[#f94355]">shoot me an email</Link>!</div>
                    </div>
                    <div className="flex gap-4">
                        <Link className="" to="https://www.linkedin.com/in/elisetvy/" target="_blank"><img className="h-10 hover:scale-105" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt="linkedin" /></Link>
                        <Link className="" to="https://github.com/elisetvy" target="_blank"><img className="h-10 hover:scale-105" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" /></Link>
                        <Link className="" to="https://calendly.com/elisetvy" target="_blank"><img className="h-10 hover:scale-105" src="https://www.insiteful.com.au/wp-content/uploads/2022/12/calendly-logo.webp" alt="calendly" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;