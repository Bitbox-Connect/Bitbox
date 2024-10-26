import "../index.css";

const Preloader = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex border-2 border-gray-700 justify-center items-center z-50 bg-gradient-to-r
         from-[#0d0d0d] via-[#2b2a2a] to-[#100f0f]">
            <svg viewBox="0 0 1320 300">
                <text
                    x="50%"
                    y="50%"
                    dy=".35em"
                    textAnchor="middle"
                    className="uppercase animate-stroke text-8xl text-[#8a8b8b]"
                >
                    Bit&nbsp;Box&nbsp;
                </text>
            </svg>
        </div>
    )
};
export default Preloader;
