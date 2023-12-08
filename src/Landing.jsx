import Collage from "./assets/Collage.png"

function Landing() {

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div className="relative w-[400px] h-full">
                <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-yellow border border-black"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-yellow border border-black"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-yellow border border-black"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-yellow border border-black"></div>
                <img className="border border-black h-full w-full object-cover" src={Collage} alt="collage" />
            </div>
        </div>
    )
}

export default Landing;