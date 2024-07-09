import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="h-[5rem] flex justify-around sm:justify-between items-center bg-sky-950 backdrop-blur-lg ">
      <div className="flex items-center animation-bounce ">
        <img src={logo} alt="Logo" className="h-10 sm:ml-28 ml-4" />
        <span className="hidden sm:block text-3xl text-white ml-3">
          Job Hunter
        </span>
      </div>
      <div className="sm:mr-24">
        <ul className="flex flex-1 gap-5 text-lg">
          <a className=" bg-blue-600 text-white text-slate-600 font-bold rounded-[15px] px-3 py-1.5 self-center">
            Home
          </a>
          <a className=" hover:bg-blue-600 hover:text-white text-slate-600 font-bold hover:rounded-[15px] px-3 py-1.5 self-center text-indigo-500">
            Jobs
          </a>
          <a className=" hover:bg-blue-600 hover:text-white text-slate-600 font-bold hover:rounded-[15px] px-3 py-1.5 self-center text-indigo-500">
            Add Job
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
