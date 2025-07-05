import { Link } from "react-router-dom";
import { MobileSidebar } from "./MobileSidebar";

export const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg">
        <nav className="hidden lg:flex max-w-7xl h-16 gap-3 px-5 justify-between items-center mx-auto">
          <span className="font-bold text-xl text-blue-400">YourLib</span>
          <ul className="flex gap-8">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/books" className="hover:text-blue-400 transition-colors duration-200">
                All Books
              </Link>
            </li>
            <li>
              <Link to="/borrow-summary" className="hover:text-blue-400 transition-colors duration-200">
                Borrow Summary
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex h-16 px-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg items-center justify-between">
        <span className="font-bold text-xl text-blue-400">YourLib</span>
        <MobileSidebar />
      </div>
    </>
  );
};