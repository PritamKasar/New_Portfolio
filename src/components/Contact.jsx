import { BiLogoLinkedin } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail, MdWebStories } from "react-icons/md";
import { TbMailForward } from "react-icons/tb";
import { Link } from "react-router-dom";
import links from '../assets/links.json'
import { CgWebsite } from "react-icons/cg";
import { useState } from "react";
import { FaHackerrank } from "react-icons/fa";

function Contact() {
    const [error, setError] = useState({ email: false, required: false });
    const [isLoading, setIsLoading] = useState(false);
    const [parameters, setParameters] = useState({
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    })
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
    });

    const checkRequired = () => {
        if (userInput.email && userInput.message && userInput.name) {
            setError({ ...error, required: false });
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSendMail = async (e) => {
        e.preventDefault();

        if (!userInput.email || !userInput.message || !userInput.name) {
            setError({ ...error, required: true });
            return;
        } else if (error.email) {
            return;
        } else {
            setError({ ...error, required: false });
        };

        try {
            setIsLoading(true);
            toast.success("Message sent successfully!",parameters);
            setUserInput({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {

        } finally {
            setIsLoading(false);
        };
    };
    return (
        <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
            <ToastContainer />
            <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
                <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
                    CONTACT
                </span>
                <span className="h-36 w-[2px] bg-[#1a1443]"></span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div>
                    <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact with me</p>
                    <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
                        <p className="text-sm text-[#d3d8e8]">{"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}</p>
                        <div className="mt-6 flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-base">Your Name: </label>
                                <input
                                    className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                                    type="text"
                                    maxLength="100"
                                    required={true}
                                    onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                                    onBlur={checkRequired}
                                    value={userInput.name}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-base">Your Email: </label>
                                <input
                                    className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                                    type="email"
                                    maxLength="100"
                                    required={true}
                                    value={userInput.email}
                                    onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                                    onBlur={() => {
                                        checkRequired();
                                        setError({ ...error, email: !isValidEmail(userInput.email) });
                                    }}
                                />
                                {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-base">Your Message: </label>
                                <textarea
                                    className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                                    maxLength="500"
                                    name="message"
                                    required={true}
                                    onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                                    onBlur={checkRequired}
                                    rows="4"
                                    value={userInput.message}
                                />
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                {error.required && <p className="text-sm text-red-400">
                                    All fiels are required!
                                </p>}
                                <button
                                    className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                                    role="button"
                                    onClick={handleSendMail}
                                    disabled={isLoading}
                                >
                                    {
                                        isLoading ?
                                            <span>Sending Message...</span> :
                                            <span className="flex items-center gap-1">
                                                Send Message
                                                <TbMailForward size={20} />
                                            </span>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/4 ">
                    <div className="flex flex-col gap-5 lg:gap-9">
                        <p className="text-sm md:text-xl flex items-center gap-3">
                            <MdAlternateEmail
                                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={36}
                            />
                            <span>pritamkasar514@gmail.com</span>
                        </p>
                        <p className="text-sm md:text-xl flex items-center gap-3">
                            <IoMdCall
                                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={36}
                            />
                            <span>
                                +91-9175015292
                            </span>
                        </p>
                        <p className="text-sm md:text-xl flex items-center gap-3">
                            <CiLocationOn
                                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={36}
                            />
                            <span>
                                Karvenagar, Pune, Maharastra
                            </span>
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
                        <Link target="_blank" to={links.github}>
                            <IoLogoGithub
                                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={48}
                            />
                        </Link>
                        <Link target="_blank" to={links.linkedin}>
                            <BiLogoLinkedin
                                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={48}
                            />
                        </Link>
                        <Link target="_blank" to={links.hackerank}>
                            <FaHackerrank
                                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={48}
                            />
                        </Link>
                        <Link target="_blank" to={links.oldportfolio}>
                            <CgWebsite
                                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={48}
                            />
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;