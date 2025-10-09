import { FaArrowUp } from "react-icons/fa";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Introduction from "./Introduction";
import Project from "./Projects";
import Skills from "./Skills";
import { useEffect, useState } from "react";

const styleclass="fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";

function Home() {

    const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });


    return (
        <>
            <div className="sticky bg-[#0d1224]">
                <div className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
                    <Header />
                    <Introduction />
                    <section id="about">
                        <About />
                    </section>
                    <section id="experience">
                        <Experience />
                    </section>
                    <section id="skills">
                        <Skills />
                    </section>
                    <section id="project">
                        <Project />
                    </section>
                    <section id="education">
                        <Education />
                    </section>
                    <section id="contact">
                        <Contact />
                    </section>
                    <button className={styleclass} onClick={onClickBtn}>
                        <FaArrowUp />
                    </button>
                    <Footer />
                </div>
            </div>
        </>
    )

}
export default Home;