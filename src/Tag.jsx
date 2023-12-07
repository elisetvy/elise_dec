function Tag({ tag, bg }) {

    return (
        <div className={`relative w-fit px-5 py-1 border border-black bg-[${bg}]`}>
            <div className="absolute -top-1 -left-1 w-[10px] h-[10px] rounded-full bg-pink border border-black"></div>
            <div className="absolute -top-1 -right-1 w-[10px] h-[10px] rounded-full bg-pink border border-black"></div>
            <div className="absolute -bottom-1 -left-1 w-[10px] h-[10px] rounded-full bg-pink border border-black"></div>
            <div className="absolute -bottom-1 -right-1 w-[10px] h-[10px] rounded-full bg-pink border border-black"></div>
            {tag}
        </div>
    )
}

export default Tag;