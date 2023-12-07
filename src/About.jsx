function About() {

    return (
        <div className="h-full bg-white rounded-t-xl overflow-hidden">
            <img className="w-full h-2/5 object-cover" src="https://i.pinimg.com/1200x/24/1f/49/241f49ca612ef379a78fdcf7b8471ada.jpg" alt="cat" />
            <div className="h-3/5 flex flex-col justify-center">
                <div className="text-3xl text-center px-6 flex text-center justify-center items-center gap-4">
                    <div className="h-full flex flex-col items-end gap-4">
                        <div className="border border-black w-[6px] rotate-[30deg] flex"></div>
                        <div className="border border-black w-[10px]"></div>
                        <div className="border border-black w-[6px] -rotate-[30deg]"></div>
                    </div>
                    <div>hello world</div>
                    <div className="h-full flex flex-col gap-4 items-start">
                        <div className="border border-black w-[6px] -rotate-[30deg]"></div>
                        <div className="border border-black w-[10px]"></div>
                        <div className="border border-black w-[6px] rotate-[30deg]"></div>
                    </div>
                </div>
                <div className="px-4 py-4 text-center">I&apos;m Elise, a Full Stack Software Engineer with a background in Language Studies and Marketing.</div>
                <div className="px-4 text-center"><b>Interests: </b> reading, crocheting, spitting bars in several languages (natural and programming), collaging, traveling</div>
            </div>
        </div>
    )
}

export default About;