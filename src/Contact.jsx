import { Link } from "react-router-dom";

function Contact() {

    return (
        <div className="h-full">
            <div className="h-full flex flex-col justify-center items-center gap-10">
                <div className="text-center">
                    <div className="font-black text-xl">I would <span className="text-[#f94355]">love</span> to connect.</div>
                    <div className="mt-4">Please feel free to book a chat with me on Calendly, reach out to me on one of my socials, or <Link to="mailto:elisetvy@gmail.com" className="underline">shoot me an email</Link>!</div>
                    <div className="mt-2">Talk soon :)</div>
                </div>
                <div className="flex gap-4">
                    <Link className="" to="https://calendly.com/elisetvy" target="_blank"><img className="h-10 hover:scale-105" src="https://www.insiteful.com.au/wp-content/uploads/2022/12/calendly-logo.webp" alt="calendly" /></Link>
                    <Link className="" to="https://www.linkedin.com/in/elisetvy/" target="_blank"><img className="h-10 hover:scale-105" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt="linkedin" /></Link>
                    <Link className="" to="https://github.com/elisetvy" target="_blank"><img className="h-10 hover:scale-105" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Contact;