import { FaUser } from "react-icons/fa";

function Header() {
  return (
    // <header id="header" className="flex items-center justify-between pb-4 pt-6">
    <header id="header" className="flex items-center justify-between py-4">
      <h1 className="text-2xl font-bold">Task Board</h1>
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-50">
        <FaUser className="h-6 w-6" />
      </div>
    </header>
  );
}

export default Header;
