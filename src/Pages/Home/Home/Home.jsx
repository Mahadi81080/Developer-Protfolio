import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner"
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AboutSection></AboutSection>
           <Services></Services>
           <Projects></Projects>
           <Skills></Skills>
           <Contact></Contact>
        </div>
    );
};

export default Home;