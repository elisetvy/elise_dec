import { useState } from "react";
import { Link } from "react-router-dom";

import Foqal from "./assets/Foqal - Redesign.webp";
import LoveNotes from "./assets/Love Notes.webp";
import Jobly from "./assets/Jobly.webp";
import Dermasuri from "./assets/Dermasuri.webp"

function Experience() {
    const [page, setPage] = useState(1);

    return (
        <div className="max-w-[425px] h-full flex flex-col justify-between items-center">
            { page === 1 && <>
            <div className="relative border border-[#010602] h-5/6 flex justify-center items-center gap-2">
            <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <i className="invisible bi bi-chevron-left hover:cursor-pointer"></i>
                <img className="h-full object-cover" src={Foqal} alt="foqal" />
                <i onClick={() => setPage(2)} className="bi bi-chevron-right hover:cursor-pointer hover:scale-110 hover:text-[#905be6]"></i>
            </div>
            <div className="h-fit mt-3 flex justify-center gap-2">
                <i className="bi bi-circle-fill text-[6px] text-[#905be6]"></i>
                <i onClick={() => setPage(2)} className="bi bi-circle text-[6px] hover:cursor-pointer hover:scale-125"></i>
                <i onClick={() => setPage(3)} className="bi bi-circle text-[6px] hover:cursor-pointer hover:scale-125"></i>
                <i onClick={() => setPage(4)} className="bi bi-circle text-[6px] hover:cursor-pointer hover:scale-125"></i>
            </div>
            <div className="mt-4 px-4 py-4 bg-white drop-shadow-md">
                <div className="font-bold flex justify-between">
                    <div>Foqal</div>
                    <Link className="hover:scale-105 hover:text-[#905be6]" target="_blank" to="https://www.foqal.io/"><i className="bi bi-box-arrow-up-right"></i></Link>
                </div>
                <div className="border border-[#010602]"></div>
                <div className="px-2 py-2 text-sm opacity-50">
                    <div>Resolved UI bugs, ensured Content Security Policy compliance, and collaborated on the redesign of the client portal.</div>
                </div>
            </div>
            </> }
            { page === 2 && <>
            <div className="relative border border-[#010602] h-5/6 flex justify-center items-center gap-2">
                <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <i onClick={() => setPage(1)} className="bi bi-chevron-left hover:cursor-pointer hover:scale-110 hover:text-[#905be6]"></i>
                <img className="h-full object-cover" src={LoveNotes} alt="love notes" />
                <i onClick={() => setPage(3)} className="bi bi-chevron-right hover:cursor-pointer hover:scale-110 hover:text-[#905be6]"></i>
            </div>
            <div className="h-fit mt-3 flex justify-center gap-2">
                <i onClick={() => setPage(1)} className="bi bi-circle text-[6px] hover:cursor-pointer hover:scale-125"></i>
                <i className="bi bi-circle-fill text-[6px] text-[#905be6]"></i>
                <i onClick={() => setPage(3)} className="bi bi-circle text-[6px] hover:cursor-pointer hover:scale-125"></i>
                <i onClick={() => setPage(4)} className="bi bi-circle text-[6px] hover:cursor-pointer hover:scale-125"></i>
            </div>
            <div className="mt-4 px-4 py-4 bg-white drop-shadow-md">
                <div className="font-bold flex justify-between">
                    <div>Love Notes</div>
                    <Link className="hover:scale-105 hover:text-[#905be6]" target="_blank" to="https://github.com/elisetvy/friender-frontend"><i className="bi bi-box-arrow-up-right"></i></Link>
                </div>
                <div className="border border-[#010602]"></div>
                <div className="px-2 py-2 text-sm opacity-50">
                    <div>Enhanced client-side error-handling, incorporated AWS S3 for the secure storage of user-uploaded images, and expanded test coverage.</div>
                </div>
            </div>
            </> }
            { page === 3 && <>
            <div className="relative border border-[#010602] h-5/6 flex justify-center items-center gap-2">
                <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <i onClick={() => setPage(2)} className="bi bi-chevron-left hover:cursor-pointer hover:scale-110 hover:text-[#905be6]"></i>
                <img className="h-full object-cover" src={Jobly} alt="jobly" />
                <i onClick={() => setPage(4)} className="bi bi-chevron-right hover:cursor-pointer hover:scale-110 hover:text-[#905be6]"></i>
            </div>
            <div className="h-fit mt-3 flex justify-center gap-2">
                <i onClick={() => setPage(1)} className="bi bi-circle text-[6px] hover:cursor-pointer hover:scale-125"></i>
                <i onClick={() => setPage(2)} className="bi bi-circle text-[6px] hover:cursor-pointer hover:scale-125"></i>
                <i className="bi bi-circle-fill text-[6px] text-[#905be6]"></i>
                <i onClick={() => setPage(4)} className="bi bi-circle text-[6px] hover:cursor-pointer hover:scale-125"></i>
            </div>
            <div className="mt-4 px-4 py-4 bg-white drop-shadow-md">
                <div className="font-bold flex justify-between">
                    <div>Jobly</div>
                    <Link className="hover:scale-105 hover:text-[#905be6]" target="_blank" to="https://github.com/elisetvy/jobly-frontend"><i className="bi bi-box-arrow-up-right"></i></Link>
                </div>
                <div className="border border-[#010602]"></div>
                <div className="px-2 py-2 text-sm opacity-50">
                    <div>Implemented live search functionality, accelerated the First Contentful Paint, and introduced interactive design elements.</div>
                </div>
            </div>
            </> }
            { page === 4 && <>
            <div className="relative border border-[#010602] h-5/6 flex justify-center items-center gap-2">
                <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#905be6] border border-[#010602]"></div>
                <i onClick={() => setPage(3)} className="bi bi-chevron-left hover:cursor-pointer hover:scale-110 hover:text-[#905be6]"></i>
                <img className="h-full object-cover" src={Dermasuri} alt="dermasuri" />
                <i className="invisible bi bi-chevron-right hover:cursor-pointer"></i>
            </div>
            <div className="h-fit mt-3 flex justify-center gap-2">
                <i onClick={() => setPage(1)} className="bi bi-circle text-[6px] hover:cursor-pointer hover:scale-125"></i>
                <i onClick={() => setPage(2)} className="bi bi-circle text-[6px] hover:cursor-pointer hover:scale-125"></i>
                <i onClick={() => setPage(3)} className="bi bi-circle text-[6px] hover:cursor-pointer hover:scale-125"></i>
                <i className="bi bi-circle-fill text-[6px] text-[#905be6]"></i>
            </div>
            <div className="mt-4 px-4 py-4 bg-white drop-shadow-md">
                <div className="font-bold flex justify-between">
                    <div>NK Agency</div>
                    <Link className="hover:scale-105 hover:text-[#905be6]" target="_blank" to="https://nkagency.la/"><i className="bi bi-box-arrow-up-right"></i></Link>
                </div>
                <div className="border border-[#010602]"></div>
                <div className="px-2 py-2 text-sm opacity-50">
                    <div>Developed campaign strategies, created digital assets, and mobilized strategic partnerships to elevate client&apos;s online visibility.</div>
                </div>
            </div>
            </> }
        </div>
    )
}

export default Experience;