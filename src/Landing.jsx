import Geometry from "./assets/Geometry.webp"

function Landing() {

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div className="relative h-full">
                <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-yellow border border-[#010602]"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-yellow border border-[#010602]"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-yellow border border-[#010602]"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-yellow border border-[#010602]"></div>
                <img className="border border-[#010602] w-full h-full object-cover" src={Geometry} alt="collage" />
            </div>
        </div>
    )
}

export default Landing;