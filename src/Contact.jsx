import { Link } from "react-router-dom";

function Contact() {

    return (
        <div className="h-full">
            <div className="h-full flex flex-col justify-center items-center gap-10">
                <div className="text-center">
                    <div className="font-black">I would LOVE to connect.</div>
                    <div className="mt-4">Please feel free to book a chat with me on Calendly, reach out to me on one of my socials, or <Link to="mailto:elisetvy@gmail.com" className="underline">shoot me an email</Link>!</div>
                    <div className="mt-2">Talk soon :)</div>
                </div>
                <div className="flex gap-4">
                    <Link className="" to="https://calendly.com/elisetvy" target="_blank"><img className="h-10 hover:scale-105" src="https://www.insiteful.com.au/wp-content/uploads/2022/12/calendly-logo.webp" alt="calendly" /></Link>
                    <Link className="" to="https://www.linkedin.com/in/elisetvy/" target="_blank"><img className="h-10 hover:scale-105" src="data:image/png;base64,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" alt="linkedin" /></Link>
                    <Link className="" to="https://github.com/elisetvy" target="_blank"><img className="h-10 hover:scale-105" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Contact;