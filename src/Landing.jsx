import Collage_2 from "./assets/Collage 2.png"

function Landing() {

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <div className="relative w-full max-w-[425x] h-full">
                <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-yellow border border-[#010602]"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-yellow border border-[#010602]"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-yellow border border-[#010602]"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-yellow border border-[#010602]"></div>
                <img className="border border-[#010602] h-full w-full object-cover" src={Collage_2} alt="collage" />
            </div>
        </div>
    )
}

export default Landing;