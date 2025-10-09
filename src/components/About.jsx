import image from '../assets/Profile_Img.jpg'

function About() {
    return (
        <div id="about" className="my-12 lg:my-16 relative">
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
                    ABOUT ME
                </span>
                <span className="h-36 w-[2px] bg-[#1a1443]"></span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="order-2 lg:order-1">
                    <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
                        Who I am?
                    </p>
                    <p className="text-gray-200 text-sm lg:text-lg">
                        I’m Pritam Kasar, a passionate and results-driven Full Stack Developer skilled in Python, Django, React.js, and SQL. I specialize in building scalable, high-performance web applications with clean user interfaces and efficient backend systems. With a solid foundation in Data Structures, OOP, and Computer Networks, I enjoy solving real-world problems through technology and continuously exploring new tools to enhance development efficiency and user experience.                    </p>
                </div>
                <div className="flex justify-center order-1 lg:order-2">
                    <img
                        src={image}
                        width={280}
                        height={280}
                        alt="Pritam Kasar"
                        className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
                    ></img>
                </div>
            </div>
        </div>
    );
}
export default About