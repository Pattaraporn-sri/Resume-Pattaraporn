import github from "../src/IMG/icons8-github-50 (4).png";
import Ig from "../src/IMG/icons8-ig-30.png";
import facebook from "../src/IMG/icons8-facebook-30.png";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="bg-slate-950 text-slate-200 font-Cascadia h-screen">
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white ml-[166px] mt-[120px]"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white mr-[166px] mt-[590px]"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white mr-[166px] mt-[120px]"></div>
      <div className="absolute top-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white ml-[166px] mt-[590px]"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          //ตรวจสอบค่าก่อนส่ง
          const name = (
            form.elements.namedItem("name") as HTMLInputElement
          ).value.trim();
          const email = (
            form.elements.namedItem("email") as HTMLInputElement
          ).value.trim();
          const message = (
            form.elements.namedItem("message") as HTMLInputElement
          ).value.trim();

          if (!name || !email || !message) {
            alert("กรุณากรอกข้อมูลให้ครบ");
            return;
          }

          if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            alert("กรุณากรอกอีเมลให้ถูกต้อง");
            return;
          }

          alert("ส่งข้อมูลสำเร็จ");
        }}
        className="w-[500px] h-auto border-solid flex flex-col justify-center items-center ml-[500px] pt-32"
      >
        <p className="text-5xl font-bold">CONTACT</p>
        <div className="flex mt-2">
          <Link to="https://github.com/Pattaraporn-sri">
            <img src={github} className="h-8 ml-2" />
          </Link>
          <Link to="https://www.instagram.com/_yypatt/">
            <img src={Ig} className="h-9 ml-2" />
          </Link>
          <Link to="https://www.facebook.com/pattaraporn.sritirat.2024">
            <img src={facebook} className="h-9 ml-2" />
          </Link>
        </div>
        <div className="flex flex-col mt-8">
          <p>Name:</p>
          <input
            name="name"
            className="w-[350px] h-8 rounded-sm text-slate-900 pl-2"
          />
          <p className="mt-5">Email:</p>
          <input name="email" className="rounded-sm h-8 text-slate-900 pl-2" />
          <p className="mt-5">Message:</p>
          <textarea
            name="message"
            className="rounded-sm h-24 text-slate-900 pl-2"
          />
        </div>
        <button
          type="submit"
          className="border-2 w-24 rounded-md h-9 hover:bg-slate-400 mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
