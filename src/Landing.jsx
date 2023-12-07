import Collage from "./assets/Collage.png"

function Landing() {

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <img className="w-full h-full object-cover" src={Collage} alt="collage" />
        </div>
    )
}

export default Landing;