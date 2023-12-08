function About() {

    return (
        <div className="h-full flex flex-col justify-center items-center gap-4">
            <div className="relative w-[400px] h-1/4 border border-black">
                <img className="h-full w-full object-cover" src="https://i.pinimg.com/1200x/24/1f/49/241f49ca612ef379a78fdcf7b8471ada.jpg" alt="cat" />
                <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#32a346] border border-black"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#32a346] border border-black"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#32a346] border border-black"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#32a346] border border-black"></div>
            </div>
            <div className="w-[400px] bg-white drop-shadow-md">
                <div className="px-4 pt-6 pb-2">
                    <div className="border border-black ml-2 mr-2 px-2 py-1 opacity-50 text-sm flex justify-between items-center">
                        <div>software engineer</div>
                        <i className="bi bi-search"></i>
                    </div>
                </div>
                <div className="px-4 py-2">
                    <div className="font-bold">Background</div>
                    <div className="border border-black"></div>
                    <div className="px-2 py-2 text-sm opacity-50">
                        <div>Full-Stack Web Development</div>
                        <div>Marketing</div>
                        <div>Language Studies</div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="font-bold">Interests</div>
                    <div className="border border-black"></div>
                    <div className="px-2 pt-2 pb-4 text-sm opacity-50 flex flex-col gap-2">
                        <div className="flex">
                            <div className="w-1/6 italic">Online</div>
                            <div className="w-5/6">JavaScript, React, TailwindCSS, debugging, interactive design, UI/UX</div>
                        </div>
                        <div className="flex">
                            <div className="w-1/6 italic">Offline</div>
                            <div className="w-5/6">reading, crocheting, collaging, cooking, guardando segredos em outros idiomas</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;