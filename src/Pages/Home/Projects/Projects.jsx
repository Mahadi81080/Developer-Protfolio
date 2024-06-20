import projectImg from "../../../assets/Projects/Screenshot_2024-06-20_151536-removebg-preview.png";
import Ecommarce from "../../../assets/Projects/E-commarce.png";
import tourImg from "../../../assets/Projects/Tour.png";
import petPalsAdoptImg from "../../../assets/Projects/PetPalsAdopt.png";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="flex justify-between items-center gap-10  bg-[#1b1e26] text-white">
      <div className="w-7/12">
        <h2 className="text-6xl ml-10 py-7">Projects</h2>
        <img src={projectImg} alt="" className="w-full" />
      </div>
      <div className="w-5/12 mt-20">
        <Link to="https://petpalsadopt-website.web.app" target="blank">
          <div className="flex items-center gap-2">
            <img src={petPalsAdoptImg} alt="" className="w-28" />
            <div className="space-y-2">
              <h3 className="text-2xl">PetPalsAdopt Website</h3>
              <p className="text-lg">Tailored-fit website for booking</p>
            </div>
          </div>
        </Link>
        <Link to="https://blog-website-e15da.web.app" target="blank">
          {" "}
          <div className="flex  items-center gap-2 mt-10">
            <img src={tourImg} alt="" className="w-28" />
            <div className="space-y-2">
              <h3 className="text-2xl">Travel & Tours Website</h3>
              <p className="text-lg">Tailored-fit website for booking</p>
            </div>
          </div>
        </Link>
        <Link to='https://luxury-restaurant-df419.web.app' target="blank">
          <div className="flex  items-center gap-2 mt-10">
            <img src={Ecommarce} alt="" className="w-28" />
            <div className="space-y-2">
              <h3 className="text-2xl">E-commerce Web Design</h3>
              <p className="text-lg">
                Tailored to fit E-Commerce <br /> Start-ups
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
