import img1 from "../../../assets/Services/images__1_-removebg-preview.png";
import img2 from "../../../assets/Services/icons8-frontend-development-64.png";
import img3 from "../../../assets/Services/icons8-backend-development-100.png";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <div>
      <div className="bg-[#fff2ec] py-20 px-14">
        <h3 className="text-6xl font-semibold text-[#dd622d]">
          Services <br /> Offered
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div className="bg-[#dd622d] px-4 py-5 space-y-3">
          <h3 className="text-xl text-white text-center">
            Full Stack <br /> Development
          </h3>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={img1}
            alt=""
            className="w-72 mx-auto"
          />
        </div>
        <div className=" bg-[#1b1e26] px-4 py-5 space-y-3">
          <h3 className="text-xl text-white text-center">
            Front End <br /> Development
          </h3>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={img2}
            alt=""
            className="w-72 mx-auto"
          />
        </div>
        <div className="bg-[#dd622d] px-4 py-5 space-y-3">
          <h3 className="text-xl text-white text-center">
            Back End <br /> Development
          </h3>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={img3}
            alt=""
            className="w-72 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
