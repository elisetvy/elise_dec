import { useState } from "react";

import Foqal_Lottie from "./assets/Foqal - Lottie.png";
import Foqal_Slate from "./assets/Foqal - Slate.png";
import LoveNotes_1 from "./assets/Love Notes - Register 1.png";
import LoveNotes_2 from "./assets/Love Notes - Register 2.png";
import Jobly_Old from "./assets/Jobly - Old.png";
import Jobly_New from "./assets/Jobly - New.png";
import Aloisia from "./assets/Aloisia - 1.png";
import Dermasuri from "./assets/Dermasuri - 1.png"

function Experience() {
    const [page, setPage] = useState(1);

    return (
        <div className="h-full flex flex-col justify-between">
            { page === 1 && <>
            <div className="w-full h-5/6 flex justify-center items-center gap-2">
                <i className="invisible bi bi-chevron-left hover:cursor-pointer"></i>
                <img className="h-full object-cover" src={Foqal_Lottie} alt="foqal lottie" />
                <i onClick={() => setPage(2)} className="bi bi-chevron-right hover:cursor-pointer"></i>
            </div>
            <div className="h-fit mt-2 flex justify-center gap-2">
                <i className="bi bi-circle-fill text-[6px]"></i>
                <i onClick={() => setPage(2)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i onClick={() => setPage(3)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i onClick={() => setPage(4)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
            </div>
            <div className="h-1/2 mt-4 text-center">
            <div className="font-black">Foqal</div>
            <div className="pt-2">
                <ul className="list-disc list-inside px-6 text-sm">
                    <li>Achieved Content Security Policy compliance by replacing Lottie animations containing inline styles with static images</li>
                    <li>Debugged and configured Slate text editor to preserve formatting and save content properly</li>
                    <li>Collaborated with a team on implementing the redesign of the client portal using CSS and Bootstrap</li>
                </ul>
            </div>
            </div>
            </> }
            { page === 2 && <>
            <div className="w-full h-5/6 flex justify-center items-center gap-2">
                <i onClick={() => setPage(1)} className="bi bi-chevron-left hover:cursor-pointer"></i>
                <img className="h-full object-cover" src={LoveNotes_1} alt="love notes register 1" />
                <i onClick={() => setPage(3)} className="bi bi-chevron-right hover:cursor-pointer"></i>
            </div>
            <div className="h-fit mt-2 flex justify-center gap-2">
                <i onClick={() => setPage(1)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i className="bi bi-circle-fill text-[6px]"></i>
                <i onClick={() => setPage(3)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i onClick={() => setPage(4)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
            </div>
            <div className="h-1/2 mt-4 text-center">
            <div className="font-black">Love Notes</div>
            <div className="pt-2">
                <ul className="list-disc list-inside px-6 text-sm">
                    <li>Established rigorous front-end and back-end validation mechanisms</li>
                    <li>Integrated AWS S3 for cost-efficient, scalable, and secure image storage</li>
                    <li>Wrote and executed comprehensive unit and integration tests using Jest and Supertest</li>
                </ul>
                </div>
            </div>
            </> }
            { page === 3 && <>
                <div className="w-full h-5/6 flex justify-center items-center gap-2">
                <i onClick={() => setPage(2)} className="bi bi-chevron-left hover:cursor-pointer"></i>
                <img className="h-full object-cover" src={Jobly_New} alt="jobly" />
                <i onClick={() => setPage(4)} className="bi bi-chevron-right hover:cursor-pointer"></i>
            </div>
            <div className="h-fit mt-2 flex justify-center gap-2">
                <i onClick={() => setPage(1)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i onClick={() => setPage(2)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i className="bi bi-circle-fill text-[6px]"></i>
                <i onClick={() => setPage(4)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
            </div>
            <div className="h-1/2 mt-4 text-center">
            <div className="font-black">Jobly</div>
            <div className="pt-2">
                <ul className="list-disc list-inside px-6 text-sm">
                    <li>Implemented authentication with JSON Web Tokens for secure user verification and BCrypt for password encryption</li>
                    <li>Deployed a loading spinner component to accelerate the First Contentful Paint</li>
                    <li>Incorporated LIVE search functionality with Lodoash debounce</li>
                </ul>
                </div>
            </div>
            </> }
            { page === 4 && <>
            <div className="w-full h-5/6 flex justify-center items-center gap-2">
                <i onClick={() => setPage(3)} className="bi bi-chevron-left hover:cursor-pointer"></i>
                <img className="h-full object-cover" src={Dermasuri} alt="dermasuri" />
                <i className="invisible bi bi-chevron-right hover:cursor-pointer"></i>
            </div>
            <div className="h-fit mt-2 flex justify-center gap-2">
                <i onClick={() => setPage(1)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i onClick={() => setPage(2)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i onClick={() => setPage(3)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i className="bi bi-circle-fill text-[6px]"></i>
            </div>
            <div className="h-1/2 mt-4 text-center">
            <div className="font-black">NK Agency</div>
            <div className="pt-2">
                <ul className="list-disc list-inside px-6 text-sm">
                    <li>Collaborated with client and creative team to develop and execute monthly content calendars</li>
                    <li>Elevated client’s online visibility on TikTok through continuous audits of trends and high-performing content, in-depth analyses of audience demographic, and enhancement of content quality</li>
                    <li>Achieved a 122% growth in client's followers in 90 days by leveraging interactive content and strategic partnerships</li>
                </ul>
                </div>
            </div>
            </> }
        </div>
    )
}

export default Experience;