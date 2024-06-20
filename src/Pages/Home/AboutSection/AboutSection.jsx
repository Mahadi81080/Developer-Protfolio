import img from "../../../assets/about section.jpg";
import img2 from "../../../assets/icons8-down-arrow-50.png";
const AboutSection = () => {
  return (
    <div>
      <div className="flex justify-between bg-[#1b1e26]">
        <div className="w-full flex justify-between items-center relative">
          <img src={img} alt="" className=" bg-[#ccbeb5]" />
        </div>
        <div className="w-4/12 space-y-6 bg-[#de622f] text-white px-10 pb-4 mt-10">
          <h2 className="text-5xl font-semibold">
            About <br /> Mahadi
          </h2>
          <img src={img2} alt="" className="h-28 w-16" />
          <p className="pb-10">
            Hi I'm Md.Mahadi Hasan <br />
            I'm a passionate web developer with experience in creating
            responsive and user-friendly websites. My skills include HTML, CSS,
            JavaScript, React.js, and more. I enjoy turning complex problems
            into simple, beautiful, and intuitive designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
