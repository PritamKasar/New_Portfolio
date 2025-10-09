
import { BsPersonWorkspace } from "react-icons/bs";
import image from '../assets/section.svg'
import blur from '../assets/blur-23.svg'
import Animation from "./Animation";
import lottieFile from '../assets/education.json'

function Education() {

const educations = [
  {
    id: 1,
    title: "B. Tech in Computer Engineering",
    duration: "2021 - 2025",
    institution: "Shri Vile Parle Kelavani Mandals Institute of Technology",
  },
  {
    id: 2,
    title: "Higher Secondary Education",
    duration: "2019 - 2021",
    institution: "Aadarsh Arts, Commerce and Science College",
  },
  {
    id: 3,
    title: "Secondary School",
    duration: "2009 - 2019",
    institution: "Jai Hind High School",
  }
]
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <img
        src={image}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <Animation animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                educations.map(education => (
                <article className={`h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>

                    <div className="p-3 relative text-white">
                      <img
                        src={blur}
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">{education.institution}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;