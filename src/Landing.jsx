import Collage from "./assets/Collage.png"

function Landing() {

    return (
        <div className="flex flex-col justify-center items-center">
            <img className="min-w-[400px] max-h-[600px]" src={Collage} alt="collage" />
            <div className="mt-4 text-center">
                <span className="text-3xl font-black">ELISE VY, </span><span className="text-md italic">Software Engineer</span>
            </div>
        </div>
    )
}

export default Landing;