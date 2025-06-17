import AboutSectionFifth from "@/app/components/about-sections/aboutSectionFifth";
import AboutSectionFourth from "@/app/components/about-sections/aboutSectionFourth";
// import AboutSectionOne from "@/app/components/about-sections/aboutSectionOne";
// import AboutSectionThree from "@/app/components/about-sections/aboutSectionThree";
// import AboutSectionTwo from "@/app/components/about-sections/aboutSectionTwo";
import HeroAbout from "@/app/components/about-sections/heroAbout";

const About = () => {
    return (
        <div>
            <HeroAbout />
            {/* <AboutSectionOne /> */}
            {/* <AboutSectionTwo /> */}
            {/* <AboutSectionThree /> */}
            <AboutSectionFourth />
            <AboutSectionFifth />
        </div>
    )
}

export default About