import img2 from "../../../assets/Contact/Screenshot_2024-06-20_160655-removebg-preview.png";
import GitHub from "../../../assets/Contact/images__2_-removebg-preview.png";
import facebook from "../../../assets/Contact/images__1_-removebg-preview.png";
import linkedin from "../../../assets/Contact/images-removebg-preview.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="bg-[#1b1e26] pt-16 text-white">
      <div className="md:w-1/2 lg:w-1/2 bg-[#de622f] px-10 py-10">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          DO YOU NEED A WEB DEVELOPER
        </h3>
        <h5 className="mt-4 lg:mt-10 text-base md:text-xl lg:text-xl font-bold">
          Contact me via :
        </h5>
        <ul className="list-disc pl-7 text-sm md:text-base lg:text-base ">
          <li>+8801608581080</li>
          <li>mahedihasan81080@gmail.com</li>
        </ul>
        <div className="flex justify-center items-center gap-5 mt-10">
          <Link
            to="https://www.linkedin.com/in/md-mahadi-hasan-webdev"
            target="blank"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={linkedin}
              alt=""
              className="w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20"
            />
          </Link>
          <Link to="https://web.facebook.com/Mahadi15012004" target="blank">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={facebook}
              alt=""
              className="w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20"
            />
          </Link>
          <Link to="https://github.com/Mahadi81080" target="blank">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src={GitHub}
              alt=""
              className="w-[80px] md:w-[100px] lg:w-[100px] "
            />
          </Link>
        </div>
      </div>
      <div className="md:flex-1 lg:flex-1 flex justify-end py-10 px-10 gap-2 mt-10">
        <img src={img2} alt="" className="h-32" />
        <div className="text-white mt-2 space-y-2">
          <h2 className="text-3xl md:text-4xl lg:text-4xl">
            Md.Mahadi <br /> Hasan
          </h2>
          <h4 className="uppercase text-sm md:text-base lg:text-base">
            Web development Services
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
