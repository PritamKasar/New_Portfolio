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
                        I’m a GenAI Backend Engineer specializing in Python, Django, FastAPI, and SQL, with a focus on developing scalable backend systems and intelligent AI applications. My work spans LLM integration, RAG pipelines, AI agents, tool calling, MCP, and workflow orchestration, enabling AI systems to retrieve contextual knowledge, interact with external tools, and automate complex tasks. With a strong foundation in backend engineering, Generative AI and API design, I’m passionate about transforming emerging AI technologies into robust, efficient, and production-ready solutions.
                    </p>
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