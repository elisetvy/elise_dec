function About() {

    return (
        <div className="h-full flex flex-col justify-center items-center gap-4">
            <div className="relative w-full max-w-[400px] h-1/5 border border-black">
                <img className="h-full w-full object-cover" src="https://i.pinimg.com/1200x/24/1f/49/241f49ca612ef379a78fdcf7b8471ada.jpg" alt="cat" />
                <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#32a346] border border-black"></div>
                <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#32a346] border border-black"></div>
                <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-[#32a346] border border-black"></div>
                <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-[#32a346] border border-black"></div>
            </div>
            <div className="max-w-[400px] bg-white drop-shadow-md">
                <div className="px-4 pt-6 pb-2">
                    <div className="border border-black ml-2 mr-2 px-2 py-1 opacity-50 text-sm flex justify-between items-center">
                        <div>software engineer</div>
                        <i className="bi bi-search"></i>
                    </div>
                </div>
                <div className="px-4 py-2">
                    <div className="px-2 py-2 text-sm">
                        <div className="flex items-center">
                            <div>Hello! I'm&nbsp;&nbsp;</div>
                            <div className="flex">
                            <div className="flex flex-col justify-between items-end">
                                <div className="w-[3px] border border-[#32a346] rotate-[30deg]"></div>
                                <div className="w-[5px] border border-[#32a346]"></div>
                                <div className="w-[3px] border border-[#32a346] -rotate-[30deg]"></div>
                            </div>
                            <b>&nbsp;Elise&nbsp;</b>
                            <div className="flex flex-col justify-between items-start">
                                <div className="w-[3px] border border-[#32a346] -rotate-[30deg]"></div>
                                <div className="w-[5px] border border-[#32a346]"></div>
                                <div className="w-[3px] border border-[#32a346] rotate-[30deg]"></div>
                            </div>                            </div>
                            </div>
                        <div className="mt-2">I specialize in full-stack Javascript development, React, Node.js/Express, Tailwind CSS, and SQL databases. </div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="font-bold">Interests</div>
                    <div className="border border-black"></div>
                    <div className="px-2 pt-2 pb-4 text-xs sm:text-sm opacity-50 flex flex-col gap-2">
                        <div className="flex">
                            <div className="w-1/6 italic italic text-[#32a346]">Online</div>
                            <div className="w-5/6">regex, Pascal's triangle, Dijkstra's algorithm, 418 I'm a teapot, bogosort </div>
                        </div>
                        <div className="flex">
                            <div className="w-1/6 italic text-[#32a346]">Offline</div>
                            <div className="w-5/6">reading, crochet, trivia nights, romance languages, my goose</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;