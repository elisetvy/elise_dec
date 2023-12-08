import { useState } from "react";
import { Link } from "react-router-dom";

import Foqal_Redesign from "./assets/Foqal - Redesign.png";
import LoveNotes_1 from "./assets/Love Notes - Register 1.png";
import Jobly_New from "./assets/Jobly - New.png";
import Dermasuri from "./assets/Dermasuri - 1.png"

function Experience() {
    const [page, setPage] = useState(1);

    return (
        <div className="h-full flex flex-col justify-between items-center">
            { page === 1 && <>
            <div className="relative w-[400px] border border-black h-5/6 flex justify-center items-center gap-2">
            <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <i className="invisible bi bi-chevron-left hover:cursor-pointer"></i>
                <img className="h-full object-cover" src={Foqal_Redesign} alt="foqal redesign" />
                <i onClick={() => setPage(2)} className="bi bi-chevron-right hover:cursor-pointer hover:scale-110"></i>
            </div>
            <div className="w-[400px] h-fit mt-2 flex justify-center gap-2">
                <i className="bi bi-circle-fill text-[6px] text-[#905be6]"></i>
                <i onClick={() => setPage(2)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i onClick={() => setPage(3)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i onClick={() => setPage(4)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
            </div>
            <div className="w-[400px] mt-4 px-4 py-4 bg-white drop-shadow-md">
                <div className="font-bold flex justify-between">
                    <div>Foqal</div>
                    <Link className="hover:scale-105 hover:text-[#905be6]" target="_blank" to="https://www.foqal.io/"><i className="bi bi-box-arrow-up-right"></i></Link>
                </div>
                <div className="border border-black"></div>
                <div className="px-2 py-2 text-sm opacity-50">
                    <div>Resolved UI bugs, ensured Content Security Policy compliance, and collaborated on the redesign of the client portal.</div>
                </div>
            </div>
            </> }
            { page === 2 && <>
            <div className="relative w-[400px] border border-black h-5/6 flex justify-center items-center gap-2">
                <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <i onClick={() => setPage(1)} className="bi bi-chevron-left hover:cursor-pointer hover:scale-110"></i>
                <img className="h-full object-cover" src={LoveNotes_1} alt="love notes" />
                <i onClick={() => setPage(3)} className="bi bi-chevron-right hover:cursor-pointer hover:scale-110"></i>
            </div>
            <div className="w-[400px] h-fit mt-2 flex justify-center gap-2">
                <i onClick={() => setPage(1)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i className="bi bi-circle-fill text-[6px] text-[#905be6]"></i>
                <i onClick={() => setPage(3)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i onClick={() => setPage(4)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
            </div>
            <div className="w-[400px] mt-4 px-4 py-4 bg-white drop-shadow-md">
                <div className="font-bold flex justify-between">
                    <div>Love Notes</div>
                    <Link className="hover:scale-105 hover:text-[#905be6]" target="_blank" to="https://github.com/elisetvy/friender-frontend"><i className="bi bi-box-arrow-up-right"></i></Link>
                </div>
                <div className="border border-black"></div>
                <div className="px-2 py-2 text-sm opacity-50">
                    <div>Enhanced client-side error-handling, incorporated AWS S3 for the secure storage of user-uploaded images, and expanded test coverage.</div>
                </div>
            </div>
            </> }
            { page === 3 && <>
            <div className="relative w-[400px] border border-black h-5/6 flex justify-center items-center gap-2">
                <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <i onClick={() => setPage(2)} className="bi bi-chevron-left hover:cursor-pointer hover:scale-110"></i>
                <img className="h-full object-cover" src={Jobly_New} alt="jobly" />
                <i onClick={() => setPage(4)} className="bi bi-chevron-right hover:cursor-pointer hover:scale-110"></i>
            </div>
            <div className="w-[400px] h-fit mt-2 flex justify-center gap-2">
                <i onClick={() => setPage(1)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i onClick={() => setPage(2)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i className="bi bi-circle-fill text-[6px] text-[#905be6]"></i>
                <i onClick={() => setPage(4)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
            </div>
            <div className="w-[400px] mt-4 px-4 py-4 bg-white drop-shadow-md">
                <div className="font-bold flex justify-between">
                    <div>Jobly</div>
                    <Link className="hover:scale-105 hover:text-[#905be6]" target="_blank" to="https://github.com/elisetvy/jobly-frontend"><i className="bi bi-box-arrow-up-right"></i></Link>
                </div>
                <div className="border border-black"></div>
                <div className="px-2 py-2 text-sm opacity-50">
                    <div>Implemented live search functionality, accelerated the First Contentful Paint, and introduced interactive design elements.</div>
                </div>
            </div>
            </> }
            { page === 4 && <>
            <div className="relative w-[400px] border border-black h-5/6 flex justify-center items-center gap-2">
                <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-black"></div>
                <i onClick={() => setPage(3)} className="bi bi-chevron-left hover:cursor-pointer hover:scale-110"></i>
                <img className="h-full object-cover" src={Dermasuri} alt="dermasuri" />
                <i className="invisible bi bi-chevron-right hover:cursor-pointer"></i>
            </div>
            <div className="w-[400px] h-fit mt-2 flex justify-center gap-2">
                <i onClick={() => setPage(1)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i onClick={() => setPage(2)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i onClick={() => setPage(3)} className="bi bi-circle text-[6px] hover:cursor-pointer"></i>
                <i className="bi bi-circle-fill text-[6px] text-[#905be6]"></i>
            </div>
            <div className="w-[400px] mt-4 px-4 py-4 bg-white drop-shadow-md">
                <div className="font-bold flex justify-between">
                    <div>NK Agency</div>
                    <Link className="hover:scale-105 hover:text-[#905be6]" target="_blank" to="https://nkagency.la/"><i className="bi bi-box-arrow-up-right"></i></Link>
                </div>
                <div className="border border-black"></div>
                <div className="px-2 py-2 text-sm opacity-50">
                    <div>Developed campaign strategies, created digital assets, and mobilized strategic partnerships to elevate client's online visibility.</div>
                </div>
            </div>
            {/* <div className="h-1/2 mt-4 text-center">
            <div className="font-black">NK Agency</div>
            <div className="pt-2">
                <ul className="list-disc list-inside px-6 text-sm">
                    <li>Collaborated with client and creative team to develop and execute monthly content calendars</li>
                    <li>Elevated client’s online visibility on TikTok through continuous audits of trends and high-performing content, in-depth analyses of audience demographic, and enhancement of content quality</li>
                    <li>Achieved a 122% growth in client's followers in 90 days by leveraging interactive content and strategic partnerships</li>
                </ul>
                </div>
            </div> */}
            </> }
        </div>
    )
}

export default Experience;