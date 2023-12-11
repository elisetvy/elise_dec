import Collage from "./assets/Collage.webp"

function Landing() {

    return (
        <div className="max-h-[600px] flex flex-col justify-center items-center">
            <div className="relative max-h-full">
                <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-yellow border border-[#010602]"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-yellow border border-[#010602]"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-yellow border border-[#010602]"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-yellow border border-[#010602]"></div>
                <img className="border border-[#010602] w-full h-full object-contain" src={Collage} alt="collage" />
            </div>
        </div>
    )
}

export default Landing;