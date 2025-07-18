import HomeSectionEight from "./components/home-sections/HomeSectionEight"
import HomeSectionFour from "./components/home-sections/HomeSectionFour"
import HomeSectionNine from "./components/home-sections/HomeSectionNine"
import HomeSectionOne from "./components/home-sections/HomeSectionOne"
import HomeSectionSeven from "./components/home-sections/HomeSectionSeven"
// import HomeSectionSix from "./components/home-sections/HomeSectionSix"
import HomeSectionThree from "./components/home-sections/HomeSectionThree"
import HomeSectionTwo from "./components/home-sections/HomeSectionTwo"
import HomeSectionFive from "./components/home-sections/HomeSectionFive"


const page = () => {
  return (
    <div>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      {/* <HomeSectionSix /> */}
      <HomeSectionSeven />
      <HomeSectionEight />
      <HomeSectionNine />
    </div>
  )
}

export default page