import { Link } from "react-router-dom";
import github from "../src/IMG/icons8-github-30.png";
import facrbook from "../src/IMG/icons8-facebook-30.png";
import ig from "../src/IMG/icons8-ig-30.png";

function Home() {
  return (
    <div className="bg-slate-950 text-slate-200 h-[91vh] flex justify-center items-center font-Cascadia">
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white ml-[166px] mt-[120px]"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white mr-[166px] mt-[590px]"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white mr-[166px] mt-[120px]"></div>
      <div className="absolute top-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white ml-[166px] mt-[590px]"></div>
      <div className="w-[1200px] h-[550px] border-solid flex flex-col justify-center ml-[500px]">
        <p className="font-bold text-5xl">Pattaraporn Sritirat</p>
        <p className="text-xl">Front-End Developer</p>
        <p className="w-[550px] text-sm mt-3">
          I’m passionate about Front-End Development, where I can combine clean
          design, fast performance, and accessibility. I enjoy learning quickly
          and using modern tools to build user-friendly and efficient web
          experiences.
        </p>
        <div className="flex">
          <Link to="https://github.com/Pattaraporn-sri">
            <img src={github} className="h-9 mt-3" />
          </Link>
          <Link to="https://www.facebook.com/pattaraporn.sritirat.2024">
            <img src={facrbook} className="h-9 mt-3 ml-2" />
          </Link>
          <Link to="https://www.instagram.com/_yypatt/">
            <img src={ig} className="h-9 mt-3 ml-2" />
          </Link>
        </div>

        <div>
          <Link to="about">
            <button className="bg-white text-black font-bold w-20 h-8 rounded-xl mt-3 text-sm">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
