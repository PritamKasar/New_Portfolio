import React from "react";

function Project() {
 const projectsData = [
    {
        id: 1,
        name: 'QR-Based Vending Machine App',
        description: "A real-time attendance tracking application that allows students to mark their presence by scanning unique QR codes. The backend efficiently organizes attendance data with 95% accuracy and automates report exports, reducing faculty workload by 50%.",
        tools: ['Python','React.js','Rezorpay Payment Gateway','Git'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'QR-Based Attendance System',
        description: "A fully cashless vending machine solution where users can scan QR codes and make payments using Razorpay. The system reduces transaction time by 40%, ensures zero payment failures, and enhances user experience with a responsive React.js frontend compatible across devices.",
        tools: ['Python','HTML','React.js','Postman','Git'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
    }
];
    return (
        <div id='projects' className="relative z-50  my-12 lg:my-24">
            <div>
                <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
                <div className="flex items-center justify-start relative">
                    <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
                        PROJECTS
                    </span>
                    <span className="w-full h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="pt-24">
                <div className="flex flex-col gap-6">
                    {projectsData.slice(0, 4).map((project, index) => (
                        <div
                            id={`sticky-card-${index + 1}`}
                            key={index}
                            className="sticky-card w-full mx-auto max-w-2xl sticky"
                        >
                            <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                                <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
                                    <div className="flex flex-row">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                                        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                                    </div>
                                    <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
                                        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
                                            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
                                            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
                                            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
                                        </div>
                                        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
                                            {project.name}
                                        </p>
                                    </div>
                                    <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                                        <code className="font-mono text-xs md:text-sm lg:text-base">
                                            <div className="blink">
                                                <span className="mr-2 text-pink-500">const</span>
                                                <span className="mr-2 text-white">project</span>
                                                <span className="mr-2 text-pink-500">=</span>
                                                <span className="text-gray-400">{'{'}</span>
                                            </div>
                                            <div>
                                                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                                                <span className="text-gray-400">{`'`}</span>
                                                <span className="text-amber-300">{project.name}</span>
                                                <span className="text-gray-400">{`',`}</span>
                                            </div>

                                            <div className="ml-4 lg:ml-8 mr-2">
                                                <span className=" text-white">tools:</span>
                                                <span className="text-gray-400">{` ['`}</span>
                                                {
                                                    project.tools.map((tag, i) => (
                                                        <React.Fragment key={i}>
                                                            <span className="text-amber-300">{tag}</span>
                                                            {
                                                                project.tools?.length - 1 !== i &&
                                                                <span className="text-gray-400">{`', '`}</span>
                                                            }
                                                        </React.Fragment>
                                                    ))
                                                }
                                                <span className="text-gray-400">{"'],"}</span>
                                            </div>
                                            <div>
                                                <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
                                                <span className="text-orange-400">{project.role}</span>
                                                <span className="text-gray-400">,</span>
                                            </div>
                                            <div className="ml-4 lg:ml-8 mr-2">
                                                <span className="text-white">Description:</span>
                                                <span className="text-cyan-400">{' ' + project.description}</span>
                                                <span className="text-gray-400">,</span>
                                            </div>
                                            <div><span className="text-gray-400">{`};`}</span></div>
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Project;