import yy from "../src/IMG/picture-yy2-Photoroom.png";
import music from "../src/IMG/icons8-music-50.png";
import coffee from "../src/IMG/icons8-coffee-50.png";
import shop from "../src/IMG/icons8-shopping-bag-50.png";
import chef from "../src/IMG/icons8-chef-hat-50.png";
import movie from "../src/IMG/icons8-movie-50.png";
import react from "../src/IMG/icons8-react-50.png";
import typescript from "../src/IMG/icons8-typescript-96 - Copy.png";
import js from "../src/IMG/icons8-js-96.png";
import html from "../src/IMG/icons8-html-96 - Copy.png";
import css from "../src/IMG/icons8-css-96.png";
import vite from "../src/IMG/icons8-vite-48.png";
import tailwind from "../src/IMG/icons8-tailwind-css-96 - Copy.png";
import ant from "../src/IMG/ant-design-icon.png";
import figma from "../src/IMG/icons8-figma-96.png";
import mongdb from "../src/IMG/1_doAg1_fMQKWFoub-6gwUiQ.png";
import node from "../src/IMG/icons8-node-js-64 (1).png";
import express from "../src/IMG/icons8-express-js-50 (1).png";
import api from "../src/IMG/icons8-rest-api-50.png";
import github from "../src/IMG/icons8-github-50 (4).png";
import postman from "../src/IMG/postman-nocode.webp";
import gitlab from "../src/IMG/icons8-gitlab-50.png";
import mockoon from "../src/IMG/mockoon.png";
import clickup from "../src/IMG/629e250b974c5f2c1ceaa621.png";
import vercel from "../src/IMG/vercel.png";
import kkw from "../src/IMG/Khon_Kaen_Wittayayon_School_Logo.svg.png";
import kku from "../src/IMG/LogoKKU_thai.png";
import React, { useRef } from "react";

const About: React.FC = () => {
  const scroll1Ref = useRef<HTMLLIElement | null>(null);
  const scroll2Ref = useRef<HTMLLIElement | null>(null);
  const scroll3Ref = useRef<HTMLLIElement | null>(null);
  const scroll4Ref = useRef<HTMLLIElement | null>(null);

  const handleScroll = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex h-full bg-slate-950 text-slate-200 font-Cascadia">
      {/* side bar */}
      <div className="w-56 h-[662px] ml-10 flex-col fixed">
        <p className="text-4xl font-bold mt-5">About me</p>
        <button
          onClick={() => handleScroll(scroll1Ref)}
          className="text-lg mt-5 hover:scale-125 transition-transform hover:text-slate-500"
        >
          Introduction
        </button>
        <button
          onClick={() => handleScroll(scroll2Ref)}
          className="text-lg mt-2 hover:scale-125 transition-transform hover:text-slate-500"
        >
          Personality
        </button>
        <br />
        <button
          onClick={() => handleScroll(scroll3Ref)}
          className="text-lg mt-2 hover:scale-125 transition-transform hover:text-slate-500"
        >
          Skills
        </button>
        <br />
        <button
          onClick={() => handleScroll(scroll4Ref)}
          className="text-lg mt-2 hover:scale-125 transition-transform hover:text-slate-500"
        >
          Education
        </button>
      </div>

      {/* content */}
      <div className="ml-64">
        <li ref={scroll1Ref} className="text-2xl font-bold">
          Introduction
        </li>
        <hr className="rotate-90 w-[430px] mt-56 absolute -ml-[212px]"></hr>
        <div className="flex ml-8 animation-rightTOleft ">
          <img src={yy} className="h-56 mt-5" />
          <p className=" w-[800px] flex justify-center items-center ml-10">
            ดิฉันนางสาวภัทราพร ศรีธิราช ชื่อเล่น ยาหยี
            จบการศึกษาจากมหาวิทยาลัยขอนแก่น วิทยาลัยการคอมพิวเตอร์
            สาขาภูมิสารสนเทศศาสตร์ ดิฉันมีความหลงไหลในงานด้านการพัฒนาเว็บไซต์
            และมีเป้าหมายในอาชีพที่จะเป็นนักพัฒนาเว็บไซต์ (Web Developer)
            โดยเฉพาะอย่างยิ่งในด้านการพัฒนาเว็บไซต์ฝั่งผู้ใช้งาน (Font-End
            Developer)
            ดิฉันสนุกกับการออกแบบและพัฒนาเว็บไซต์ที่ใช้งานง่ายและตอบโจทย์ผู้ใช้งาน
            พร้อมทั้งมุ่งมั่นที่จะเรียนรู้เทคโนโลยีใหม่ๆ
            อย่างต่อเนื่องเพื่อพัฒนาตนเอง
          </p>
        </div>

        <div className="flex">
          <div className="animation-mymove">
            <p className="mt-10 font-bold text-2xl ml-8">Personal Details</p>
            <div className="flex mt-2 ml-10">
              <div>
                <p>Age</p>
                <p>Birthday</p>
                <p>Tel</p>
                <p>Email</p>
              </div>
              <div className="ml-5">
                <p>22</p>
                <p>11-03-2003</p>
                <p>093-3286263</p>
                <p>pattaraporn.sri@kkumail.com</p>
              </div>
            </div>
          </div>

          <div className="ml-36 animation-mymove">
            <p className="mt-10 font-bold text-2xl">Interests</p>
            <div className="flex justify-between mt-5 w-[500px]">
              <div>
                <img src={coffee} className="ml-2" />
                <p>Coffee</p>
              </div>
              <div>
                <img src={music} />
                <p>Music</p>
              </div>
              <div>
                <img src={shop} className="ml-3" />
                <p>Shopping</p>
              </div>
              <div>
                <img src={chef} className="ml-2" />
                <p>Cooking</p>
              </div>
              <div>
                <img src={movie} />
                <p>Movie</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personality */}
        <hr className="rotate-90 w-[150px] absolute mt-[150px] -ml-[72px]"></hr>
        <div className="font-Cascadia mt-10 animation-rightTOleft [animation-delay:2  s">
          <li ref={scroll2Ref} className="text-2xl mb-3 font-bold">
            Personality
          </li>
          <div className="ml-8">
            <li>มีความรับผิดชอบและสามารถทำงานภายใต้ความกดดันได้ดี</li>
            <li>
              มีทักษะในการแก้ไขปัญหาเชิงเทคนิค
              และสามารถวิเคราะห์ระบบหรือข้อผิดพลาดได้อย่างเป็นเหตุเป็นผล
            </li>
            <li>
              ทำงานร่วมกับทีมได้ดี
              มีความยืดหยุ่นในการสื่อสารกับทั้งเพื่อนร่วมงานและฝ่ายอื่น ๆ
            </li>
            <li>
              พร้อมพัฒนาทักษะทั้งด้าน Technical และ Soft Skills อย่างต่อเนื่อง
            </li>
            <li>
              ชอบการเรียนรู้เทคโนโลยีใหม่ ๆ
              และสามารถปรับตัวเข้ากับเครื่องมือหรือ Framework
              ที่เปลี่ยนแปลงได้อย่างรวดเร็ว
            </li>
          </div>
        </div>

        {/* Skills */}
        <hr className="rotate-90 w-[515px] absolute mt-[340px] -ml-[255px]"></hr>
        <div className="animation-mymove">
          <li ref={scroll3Ref} className="mt-10 text-2xl font-bold">
            Skills
          </li>
          <div className="flex ml-8">
            {/* Front-end */}
            <div className="mt-5">
              <div className="w-[450px] flex flex-wrap justify-center text-center border border-opacity-70 h-[260px] items-center rounded-xl hover:scale-105 transition-transform pt-10 hover:bg-slate-900">
                <p className="text-xl font-bold absolute -mt-60">
                  Front-End Developer
                </p>
                <div>
                  <img src={react} className="h-14" />
                  <p>React</p>
                </div>
                <div className="ml-5">
                  <img src={typescript} className="h-14 ml-5" />
                  <p>TypeScript</p>
                </div>
                <div>
                  <img src={js} className="h-14 ml-5" />
                  <p>JS</p>
                </div>
                <div>
                  <img src={html} className="h-14 ml-5" />
                  <p>HTML</p>
                </div>
                <div>
                  <img src={css} className="h-14 ml-5" />
                  <p>CSS</p>
                </div>
                <div>
                  <img src={vite} className="h-14 mt-2" />
                  <p>Vite</p>
                </div>
                <div>
                  <img src={tailwind} className="h-14 ml-8 mt-2" />
                  <p>Tailwind CSS</p>
                </div>
                <div className="ml-5">
                  <img src={ant} className="h-14 ml-5 mt-2" />
                  <p>Ant Design</p>
                </div>
                <div className="ml-5">
                  <img src={figma} className="h-14 ml-2 mt-2" />
                  <p>figma</p>
                </div>
              </div>
            </div>

            {/* Back-end */}
            <div className="ml-24 mt-5">
              <div className="w-[500px] flex text-center justify-center items-center border border-opacity-70 hover:scale-105 transition-transform rounded-xl h-[170px] hover:bg-slate-900">
                <p className="text-xl font-bold absolute -mt-28">
                  Back-End Developer
                </p>
                <div>
                  <img src={mongdb} className="h-14 mt-8" />
                  <p>MongoDB</p>
                </div>
                <div className="ml-10">
                  <img src={node} className="h-14 ml-2 mt-8" />
                  <p>Node.js</p>
                </div>
                <div className="ml-10">
                  <img src={express} className="h-14 ml-2 mt-8" />
                  <p>Express.js</p>
                </div>
                <div className="ml-10">
                  <img src={api} className="h-14 ml-2 mt-8" />
                  <p>REST API</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*tool & platforms */}
        <div className="mt-5 ml-56 animation-mymove">
          <div className="flex justify-center items-center h-48 mb-5 border w-[600px] border-opacity-70 hover:scale-105 transition-transform rounded-xl hover:bg-slate-900">
            <p className="absolute -mt-32 text-xl font-bold">
              Tools & Platforms
            </p>
            <div>
              <img src={github} className="h-14" />
              <p>GitHub</p>
            </div>
            <div className="ml-8">
              <img src={gitlab} />
              <p>GitLab</p>
            </div>
            <div className="ml-8">
              <img src={postman} className="h-14" />
              <p>Postman</p>
            </div>
            <div className="ml-8">
              <img src={mockoon} className="h-14" />
              <p>Mockoon</p>
            </div>
            <div className="ml-8">
              <img src={clickup} className="h-14" />
              <p>ClickUp</p>
            </div>
            <div className="ml-8">
              <img src={vercel} className="h-12" />
              <p>Vercel</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-20 mt-10">
          <li ref={scroll4Ref} className="text-2xl font-bold">
            Education
          </li>
          <hr className="rotate-90 w-[320px] absolute -ml-[157px] mt-[165px]"></hr>
          <div className="flex mt-5 ml-8">
            <img src={kkw} className="h-32" />
            <div className="ml-7 flex flex-col justify-center">
              <p>ขอนแก่นวิทยายน (KhonKaen Wittayayon)</p>
              <p>ปีการศึกษา 2559-2564</p>
              <p>สายการเรียนวิทย์-คณิต</p>
            </div>
          </div>
          <div className="flex mt-5 ml-8">
            <img src={kku} className="h-32 ml-6" />
            <div className="ml-14 flex flex-col justify-center">
              <p>มหาวิทยาลัยขอนแก่น (KhonKaen University)</p>
              <p>ปีการศึกษา 2564-2567</p>
              <p>วิทยาลัยการคอมพิวเตอร์ สาขาภูมิสารสนเทศศาสตร์</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
