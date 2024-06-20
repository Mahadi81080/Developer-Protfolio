import { BsArrow90DegDown } from "react-icons/bs";
import img from "../../../assets/1714713806246-removebg-preview.png";
import img2 from "../../../assets/Curly.png";
import { GoDownload } from "react-icons/go";
import Resume from "../../../../public/Web Developer Resume.pdf";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-between h-[500px] mt-80 md:mt-0 lg:mt-0">
      <div className="bg-[#de622f] md:flex-1 lg:flex-1 flex py-10 lg:px-10 gap-2">
        <img src={img2} alt="" className="h-40 md:h-48 lg:h-48" />
        <div className="text-white mt-4 space-y-2">
          <h2 className="text-5xl md:text-6xl lg:text-6xl">
            Md.Mahadi <br /> Hasan
          </h2>
          <h4 className="uppercase text-base md:text-xl lg:text-xl pb-7">
            <Typewriter
              words={["Web development Services"]}
              loop={5}
              cursor
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            ></Typewriter>
          </h4>
          <a
            href={Resume}
            download="Md.MahadiHasan_Resume.pdf"
            className="btn btn-outline border-white text-white rounded-full"
          >
            Download Resume <GoDownload />
          </a>
        </div>
      </div>
      <div className="w-full md:w-5/12 lg:w-5/12 relative">
        <img src={img} alt="" className="h-full w-full bg-[#1b1e26]" />
        <div className="bg-[#1b1e26] text-white flex justify-evenly items-center gap-5 py-3 absolute bottom-0 w-full">
          <p className="text-lg">
            Web Developer for Your startup <br /> business
          </p>
          <BsArrow90DegDown className="text-5xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
