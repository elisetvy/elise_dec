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

    function next(e) {
        e.preventDefault();

        if (page <= 3) {
            setPage(prev => prev += 1);
        } else {
            setPage(1);
        }
    }

    return (
        <div className="mt-4 HELP">
            { page === 1 && <>
            <div className="HELP">
                <img src={Foqal_Slate} alt="foqal slate" />
                <img src={Foqal_Lottie} alt="foqal lottie" />
            </div>
            <div>
            <div>Software Engineer Intern, Foqal</div>
            <div>
                <ul>
                    <li>Debugged and configured Slate Text Editor</li>
                    <li>Achieved CSP compliance by replacing Lottie animations with static images</li>
                    <li>Collaborated on implementing the redesign of the client portal</li>
                </ul>
            </div>
            </div>
            </> }
            { page === 2 && <>
            <div className="HELP">
                <img src={LoveNotes_1} alt="love notes register 1" />
                <img src={LoveNotes_2} alt="love notes register 2" />
            </div>
            <div>
            <div>Love Notes</div>
            <div>
                <ul>
                    <li>Established rigorous validation mechanisms with JSON Schema and tailored logic checks to maintain data integrity and reduce server load caused by invalid or improperly formatted data</li>
                    <li>Integrated AWS S3 for cost-efficient, scalable, and secure image storage, resulting in increased fault tolerance and reduced data loss incident</li>
                    <li>Wrote and executed comprehensive unit and integration tests using Jest and Supertest to decrease critical issues post-implementatin</li>
                </ul>
                </div>
            </div>
            </> }
            { page === 3 && <>
            <div className="HELP">
                <img src={Jobly_Old} alt="jobly old" />
                <img src={Jobly_New} alt="jobly new" />
            </div>
            <div>
            <div>Jobly</div>
            <div>
                <ul>
                    <li>Implemented a robust authentication system utilizing industry-standard protocols such as JSON Web Tokens for secure user verification and BCrypt for password encryption</li>
                    <li>Deployed a loading spinner component to accelerate the First Contentful Paint, ensuring an engaging user experience and encouraging prolonged interaction with the app</li>
                    <li>Live search with ldoash debounce</li>
                </ul>
                </div>
            </div>
            </> }
            { page === 4 && <>
            <div className="HELP">
                <img src={Aloisia} alt="aloisia" />
                <img src={Dermasuri} alt="dermasuri" />
            </div>
            <div>
            <div>NK</div>
            <div>
                <ul>
                    <li>Led monthly client meetings to assess goals and align content strategies in preparation for the development and execution of content calendars in collaboration with a team of photographers, graphic designers, and video content creators</li>
                    <li>Elevated client’s online visibility on TikTok, growing the follower count from under 1,000 to over 10,000 within the initial 6 months of collaboration through continuous audits of trends and high-performing content, in-depth analyses of audience demographic, and enhancement of content quality</li>
                    <li>Increased client’s Instagram engagement rate and achieved a 122% growth in followers in 90 days by leveraging customer engagement tactics including timely response to messages and comments, interactive stories, and strategic partnerships with other loved brands</li>
                </ul>
                </div>
            </div>
            </> }
            <button className="mt-10 bg-sky-300" onClick={next}>Next</button>
        </div>
    )
}

export default Experience;