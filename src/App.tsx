import headshot from "./headshot.png";
import timely from "./projects/timely.png";
import ocf from "./projects/ocf.png";
import kada from "./projects/kada.png";
import memory from "./projects/memory.jpg";
import allergy from "./projects/allergy.jpg";
import aspekta from "./fonts/Aspekta-550.woff2";
import poppins from "./fonts/Poppins-Light.woff2";
import { Font } from "@react-pdf/renderer";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";

Font.register({
  family: "Aspekta",
  src: aspekta,
});

Font.register({
  family: "Poppins",
  src: poppins,
});

const items = [
  <ExperienceCard
    company="Viget"
    companyLink="https://www.viget.com/"
    title="Application Developer Intern"
    listitems={[
      "Collaborating with other designers and developers to create an application that empowers young adults to explore their area solo by following day capsules created and posted by other users",
      "Developing numerous web applications using the Ruby on Rails framework",
    ]}
    logo="bg-[url('../public/viget.png')]"
    date="2023 - Present"
  />,
  <ExperienceCard
    company="Hack4Impact"
    companyLink="https://uiuc.hack4impact.org/"
    title="Software Developer"
    listitems={[
      <p>
        Co-developed a web application for
        <a
          href="https://openclimatefix.org/"
          className="text-[#473931] font-semibold"
        >
          {" "}
          Open Climate Fix
        </a>
        , allowing users to forecast their total solar power output
      </p>,
      <p>
        Collaborated to build a virtual apprenticeship platform for{" "}
        <a
          href="https://www.kadakareer.com/"
          className="text-[#473931] font-semibold"
        >
          KadaKareer
        </a>
        , a non-profit helping Filipino students
      </p>,
    ]}
    logo="bg-[url('../public/h4i.png')]"
    date="2022 - Present"
  />,
  <ExperienceCard
    company="Blue Cloak"
    companyLink="https://www.blue-cloak.com/"
    title="Software Developer Intern"
    listitems={[
      "Co-developed a cyber range orchestration platform that enables cyber training exercises and hosts virtual networks",
      "Expanded the map editor to better visualize network infrastructures",
      "Created unit and validation test scripts using Python to test and debug each platform component",
    ]}
    logo="bg-[url('../public/blue-cloak.png')]"
    date="2019, 2021"
  />,
  <ExperienceCard
    company="George Mason University"
    companyLink="https://www.gmu.edu/"
    title="Research Intern"
    listitems={[
      <p>
        Worked with Professor Thomas LaToza to identify{" "}
        <a
          href="https://journals.gmu.edu/index.php/jssr/article/view/3223"
          className="text-[#473931] font-semibold"
        >
          best practices for hyperparameter optimization.
        </a>
      </p>,
      <p>
        Worked with Professor Gheorghe Tecuci to develop analyses for
        sInvestigator, an AI based cognitive assistant
      </p>,
      <p>
        Work published in the GMU's 2020{" "}
        <a
          href="https://journals.gmu.edu/index.php/ITLCP/article/view/2801"
          className="text-[#473931] font-semibold"
        >
          “Teaching Towards the Future”{" "}
        </a>
        journal
      </p>,
    ]}
    logo="bg-[url('../public/gmu.png')]"
    date="2018, 2020"
  />,
];

const responsive = {
  0: {
    items: 1,
    itemsFit: "contain",
  },
  568: {
    items: 2,
    itemsFit: "contain",
  },
  1024: {
    items: 3,
    itemsFit: "contain",
  },
};

const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function App() {
  return (
    <>
      <div
        onClick={scrollUp}
        className="hidden md:block w-[45px] h-[45px] bg-[url('../public/up.svg')] bottom-[80px] right-[65px] fixed rounded-2xl shadow-md hover:cursor-pointer"
      />
      <div className="flex justify-center">
        <div className="flex flex-col items-center self-center md:w-9/12 w-full h-full bg-[#ffe4e4]/[0.8]">
          <div className="mt-7 w-[44px] h-[29px] bg-[url('../public/logo.svg')]" />
          <div className="pt-5 w-full overflow-hidden">
            <div className="flex flex-row mt-3 md:h-[360px] h-[380px] bg-[#E9D5CE]/[0.41] z-10 rounded-2xl">
              <div className="flex-1 flex flex-col relative">
                <div className="md:ml-16 ml-8 mr-5 flex-2">
                  <p className="md:mt-12 mt-8 font-Aspekta font-medium text-3xl text-[#473931]">
                    Hey, I'm Anya!
                  </p>
                  <p className="mb-5 mt-8 font-Poppins text-base text-[#473931]/[0.6]">
                    I am studying Computer Science at UIUC and love to develop
                    innovative and impactful applications. I'm mainly interested
                    in AI/ML and full-stack development. <br />
                    <br />
                    Currently, I am an Application Developer intern at{" "}
                    <a
                      href="https://viget.com/"
                      className="text-[#473931] font-semibold"
                    >
                      Viget
                    </a>{" "}
                    and am writing software at{" "}
                    <a
                      href="https://uiuc.hack4impact.org/"
                      className="text-[#473931] font-semibold"
                    >
                      Hack4Impact
                    </a>
                    .
                  </p>
                </div>
                <div className="md:ml-16 ml-8 mb-10 flex-1">
                  <div className="w-[22px] h-[22px] absolute bottom-[41px] bg-[url('../public/mail.svg')]" />
                  <a
                    href="mailto:aparekh6@illinois.edu"
                    className="font-sans absolute bottom-11 ml-8 text-sm text-[#977A71]"
                  >
                    aparekh6@illinois.edu
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anya-parekh/"
                    className="mt-10 w-[24px] h-[24px] absolute bottom-10 right-[12px] bg-[url('../public/linkedin.svg')]"
                  />
                  <a
                    href="https://github.com/anyaparekh/"
                    className="mt-10 w-[24px] h-[24px] absolute bottom-10 right-[52px] bg-[url('../public/github.svg')]"
                  />
                  <a
                    href="Anya_Parekh_Resume.pdf"
                    download="Anya_Parekh_Resume"
                    target="_blank"
                    className="mt-10 w-[24px] h-[24px] absolute bottom-10 right-[92px] bg-[url('../public/resume.svg')]"
                  />
                </div>
              </div>
              <div className="hidden mt-10 md:flex-1 md:flex items-center justify-center">
                <img
                  className="drop-shadow-[0_15px_15px_rgba(0,0,0,0.70)]"
                  src={headshot}
                  alt={"headshot"}
                  width={380}
                />
              </div>
            </div>
          </div>
          <p className="mt-14 self-center font-Aspekta font-medium text-3xl text-[#473931]">
            Experience
          </p>
          <div className="mt-4 p-5 w-full h-full justify-center items-center self-center">
            <AliceCarousel
              mouseTracking={true}
              disableButtonsControls={true}
              items={items}
              responsive={responsive}
            />
          </div>
          <div className="flex flex-col mt-3 w-full h-full bg-[#E9D5CE]/[0.41] z-10 rounded-2xl mb-10">
            <p className="mt-8 self-center font-Aspekta font-medium text-3xl text-[#473931] mb-8">
              Projects
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 px-5 mb-6">
              <ProjectCard
                picture={timely}
                title="Timely"
                logo="bg-[url('../public/link.svg')]"
                link="https://meettimely.com"
                skills={["React Native", "Firebase", "Expo Go"]}
              />
              <ProjectCard
                picture={ocf}
                title="Open Climate Fix"
                logo="bg-[url('../public/github2.svg')]"
                link="https://github.com/openclimatefix/pv-sites-mobile"
                skills={["NextJS", "TypeScript", "Auth0"]}
              />
              <ProjectCard
                picture={kada}
                title="KadaKareer"
                logo="bg-[url('../public/link.svg')]"
                link="https://app.kadakareer.com/"
                skills={["React", "NestJS", "Firebase"]}
              />
              <ProjectCard
                picture={allergy}
                title="Indian Food Allergy Classifier"
                logo="bg-[url('../public/github2.svg')]"
                link="https://github.com/anyaparekh/indian-food-allergy-tester"
                skills={["Android Studio", "TFLite Model Maker"]}
              />
              <ProjectCard
                picture={memory}
                title="Memory Game"
                logo="bg-[url('../public/github2.svg')]"
                link="https://github.com/anyaparekh/memorygame"
                skills={["Android Studio"]}
              />
            </div>
          </div>
        </div>
        <p className="mt-14 self-center font-Aspekta font-medium text-3xl text-[#473931]">
          Experience
        </p>
        {/* <div className="mt-8 w-full h-[500px] bg-[#E9D5CE]/[0.41] z-10 rounded-2xl mb-10"> */}
        <div className="mt-4 p-5 w-full h-full justify-center items-center self-center">
          <AliceCarousel
            mouseTracking={true}
            disableButtonsControls={true}
            items={items}
            responsive={responsive}
          />
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
