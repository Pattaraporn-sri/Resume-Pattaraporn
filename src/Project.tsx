import { Link } from "react-router-dom";
import { useRef } from "react";
import videotodolist from "../src/Video/TodoList1.mp4";
import videoDailyNews from "../src/Video/TO-DO-LIST.mp4";
import videoDemon from "../src/Video/Demonslayer.mp4";
import videoFramework from "../src/Video/ReactFramework.mp4";
import redux from "../src/Video/Redux.mp4";
import tailwind from "../src/Video/Tailwind CSS.mp4";
import portfolio from "../src/Video/Portfolio.mp4";
import Module from "../src/Video/MOduleCSS.mp4";
import game from "../src/Video/Game.mp4";
import property from "../src/Video/DreamProperty.mp4";

function Project() {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div className="bg-slate-950 text-slate-200 font-Cascadia h-full pb-20">
      <p className="text-4xl font-bold ml-16 pt-5">Project</p>
      <p className="ml-16 mt-2 text-sm">
        A collection of all the projects I've built.
      </p>
      <div className="ml-20 mt-10">
        {/* อสังหาริมทรัพย์ */}
        <div className="mt-5 ml-14 w-[1250px] h-60 rounded-xl border-2 flex items-center">
          <video
            ref={videoRef}
            src={property}
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => videoRef.current?.play()}
            className="w-[400px] rounded-xl ml-5"
          />
          <div>
            <p className="ml-10 text-2xl">โปรเจคอสังหาริมทรัพย์</p>
            <p className="ml-10 mt-2 w-[700px]">
              เว็บไซต์สำหรับซื้ออสังหาฯในจังหวัดขอนแก่น ในส่วนของ Front-End ใช้
              React TypeScript JavaScript และในส่วนของ Back-End ใช้ Node.js
              Express โดยเชื่อมต่อข้อมูลกับ MongoDB Compass
            </p>

            <button className="bg-gray-600 h-10 w-48 ml-10 mt-2 text-sm border-2 border-slate-300 rounded-xl hover:opacity-50 hover:scale-105">
              <Link to="https://github.com/Pattaraporn-sri/DreamProperty-Frontend">
                Source code Front-End
              </Link>
            </button>

            <button className="bg-gray-600 h-10 w-48 ml-5 border-2 text-sm border-slate-300 rounded-xl hover:opacity-50 hover:scale-105">
              <Link to="https://github.com/Pattaraporn-sri/DreamProperty-Backend">
                Source code Back-End
              </Link>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap">
          {/* To Do List */}
          <div className="relative overflow-hidden border-2 rounded-xl w-[400px] h-48 mt-10 flex items-center justify-center hover:opacity-50 opacity-0 animation-mymove ">
            <video
              ref={videoRef}
              src={videotodolist}
              autoPlay
              muted
              loop
              playsInline
              onCanPlay={() => videoRef.current?.play()}
              className="w-[500px]"
            />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 text-slate-900 font-bold flex flex-col justify-end items-start pl-5 h-full">
              <p className="font-bold text-xl">TO Do List - React</p>
              <div className="mb-5">
                <button className="border-2 border-slate-400 h-8 rounded-xl w-24 text-xs">
                  <Link to="https://github.com/Pattaraporn-sri/To-Do-List">
                    Source code
                  </Link>
                </button>
                <button className="border-2 border-slate-400 h-8 rounded-xl w-14 ml-2 text-xs">
                  <Link to="https://to-do-list-dusky-three-80.vercel.app/">
                    Demo
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* Daily News */}
          <div className="mt-10 ml-20 relative overflow-hidden border-2 rounded-xl w-[400px] h-48 flex items-center justify-center hover:opacity-50 opacity-0 animation-mymove">
            <video
              ref={videoRef}
              src={videoDailyNews}
              autoPlay
              muted
              loop
              playsInline
              className="w-[500px]"
              onCanPlay={() => videoRef.current?.play()}
            />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 text-slate-900 font-bold flex flex-col justify-end items-start">
              <p className="font-bold ml-5 text-lg">
                Daily News - React Router DOM
              </p>
              <div className="mb-5 pl-5">
                <button className="border-2 border-slate-400 h-8 rounded-xl w-24 text-xs">
                  <Link to="https://github.com/Pattaraporn-sri/Daily-News">
                    Source code
                  </Link>
                </button>
                <button className="border-2 border-slate-400 h-8 rounded-xl w-14 ml-2 text-xs">
                  <Link to="https://daily-news-hazel.vercel.app/">Demo</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Demon slayer */}
          <div className="mt-10 ml-20 w-[400px] h-48 border-2 rounded-xl relative overflow-hidden flex justify-center items-center hover:opacity-50 opacity-0 animation-mymove">
            <video
              ref={videoRef}
              src={videoDemon}
              autoPlay
              muted
              loop
              playsInline
              onCanPlay={() => videoRef.current?.play()}
              className="w-[370px]"
            />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 text-white font-bold flex flex-col justify-end items-start">
              <p className="font-bold text-2xl ml-5"> Demonslayer - API </p>
              <div className="mb-5 pl-5">
                <button className="border-2 border-slate-500 h-8 rounded-xl w-24 text-xs">
                  <Link to="https://github.com/Pattaraporn-sri/API-Demon-Slayer">
                    Source code
                  </Link>
                </button>
                <button className="border-2 border-slate-500 h-8 rounded-xl w-24 ml-2 text-xs">
                  <Link to="https://api-demon-slayer-five.vercel.app/">
                    Demo
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* React Framework */}
          <div className="mt-10 w-[400px] h-48 border-2 rounded-xl relative overflow-hidden flex justify-center items-center hover:opacity-50 opacity-0 animation-mymove">
            <video
              ref={videoRef}
              src={videoFramework}
              autoPlay
              muted
              loop
              playsInline
              onCanPlay={() => videoRef.current?.play()}
              className="w-[500px]"
            />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 text-slate-900 font-bold flex flex-col justify-end items-start">
              <p className="font-bold text-xl ml-5">React Framework</p>
              <div className="mb-5 pl-5">
                <button className="border-2 border-slate-500 h-8 rounded-xl w-24 text-sm">
                  <Link to="https://github.com/Pattaraporn-sri/React-Framework">
                    Source code
                  </Link>
                </button>
                <button className="border-2 border-slate-500 h-8 rounded-xl w-24 ml-2 text-sm">
                  <Link to="https://react-framework-six.vercel.app/">Demo</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Register - REDUX */}
          <div className="mt-10 ml-20 w-[400px] h-48 border-2 rounded-xl relative overflow-hidden flex justify-center items-center hover:opacity-50 opacity-0 animation-mymove">
            <video
              ref={videoRef}
              src={redux}
              autoPlay
              muted
              loop
              playsInline
              onCanPlay={() => videoRef.current?.play()}
              className="w-[500px]"
            />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 text-gray-700 font-bold flex flex-col justify-end items-start">
              <p className="font-bold text-2xl ml-5">Register - REDUX</p>
              <div className="mb-5 pl-5">
                <button className="border-2 border-slate-500 h-8 rounded-xl w-24 text-sm">
                  <Link to="https://github.com/Pattaraporn-sri/React-Redux">
                    Source code
                  </Link>
                </button>
                <button className="border-2 border-slate-500 h-8 rounded-xl w-24 ml-2 text-sm">
                  <Link to="https://react-redux-six-ruddy.vercel.app/">
                    Demo
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="mt-10 ml-20 w-[400px] h-48 border-2 rounded-xl relative overflow-hidden flex justify-center items-center hover:opacity-50 opacity-0 animation-mymove">
            <video
              ref={videoRef}
              src={tailwind}
              autoPlay
              muted
              loop
              playsInline
              onCanPlay={() => videoRef.current?.play()}
              className="w-[500px]"
            />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 text-white font-bold flex flex-col justify-end items-start">
              <p className="font-bold text-xl ml-5">
                Christmas Card - TailwindCSS
              </p>
              <div className="mb-5 pl-5">
                <button className="border-2 border-slate-500 h-8 rounded-xl w-24 text-sm">
                  <Link to="https://github.com/Pattaraporn-sri/React-tailwind">
                    Source code
                  </Link>
                </button>
                <button className="border-2 border-slate-500 h-8 rounded-xl w-24 ml-2 text-sm">
                  <Link to="https://react-tailwind-blush.vercel.app/">
                    Demo
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <div className="mt-10 w-[400px] h-48 border-2 rounded-xl relative overflow-hidden flex justify-center items-center hover:opacity-50 opacity-0 animation-mymove">
            <video
              ref={videoRef}
              src={portfolio}
              autoPlay
              muted
              loop
              playsInline
              onCanPlay={() => videoRef.current?.play()}
              className="w-[500px]"
            />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 text-slate-900 font-bold flex flex-col justify-end items-start">
              <p className="font-bold text-xl ml-5">Portfolio</p>
              <div className="mb-5 pl-5">
                <button className="border-2 border-slate-500 h-8 rounded-xl w-24 text-sm">
                  <Link to="https://github.com/Pattaraporn-sri/Portfolio">
                    Source code
                  </Link>
                </button>
                <button className="border-2 border-slate-500 h-8 rounded-xl w-24 ml-2 text-sm">
                  <Link to="https://portfolio-1ym7u4w2n-pattras-projects.vercel.app/">
                    Demo
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* UI - ModuleCSS */}
          <div className="mt-10 ml-20 w-[400px] h-48 border-2 rounded-xl relative overflow-hidden flex justify-center items-center hover:opacity-50 opacity-0 animation-mymove">
            <video
              ref={videoRef}
              src={Module}
              autoPlay
              muted
              loop
              playsInline
              onCanPlay={() => videoRef.current?.play()}
              className="w-[500px]"
            />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 text-white font-bold flex flex-col justify-end items-start">
              <p className="font-bold text-xl ml-5">Portfolio</p>
              <div className="mb-5 pl-5">
                <button className="border-2 border-slate-500 h-8 rounded-xl w-24 text-sm">
                  <Link to="https://github.com/Pattaraporn-sri/React-UI-Module">
                    Source code
                  </Link>
                </button>
                <button className="border-2 border-slate-500 h-8 rounded-xl w-24 ml-2 text-sm">
                  <Link to="https://react-ui-module.vercel.app/">Demo</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Volcabulary */}
          <div className="mt-10 ml-20 w-[400px] h-48 border-2 rounded-xl relative overflow-hidden flex justify-center items-center hover:opacity-50 opacity-0 animation-mymove">
            <video
              ref={videoRef}
              src={game}
              autoPlay
              muted
              loop
              playsInline
              onCanPlay={() => videoRef.current?.play()}
              className="w-[500px]"
            />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 text-state-900 font-bold flex flex-col justify-end items-start">
              <p className="font-bold text-xl ml-5">Volcabulary Game - React</p>
              <div className="mb-5 pl-5">
                <button className="border-2 border-slate-500 h-8 rounded-xl w-24 text-sm">
                  <Link to="https://github.com/Pattaraporn-sri/React-Game">
                    Source code
                  </Link>
                </button>
                <button className="border-2 border-slate-500 h-8 rounded-xl w-24 ml-2 text-sm">
                  <Link to="https://react-game-psi.vercel.app/">Demo</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
