import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import code from "../IMG/icons8-code-64.png"

const MainLayout = () => {
  return (
    <>
      <div className="flex items-center justify-between h-16 bg-slate-950 font-Cascadia text-xl font-bold text-slate-200">
        <div className="flex">
          <img src={code} className="h-10 absolute ml-5"/>
          <Link to="/" className="ml-[70px] mt-1 text-2xl">Pattaraporn</Link>
        </div>
        <div className="flex justify-evenly w-[500px]">
          <Link to="about">About</Link>
          <Link to="project">Project</Link>
          <Link to="contact">Contact</Link>
        </div>
      </div>

      <Outlet />
    </>
  );
};
export default MainLayout;
