import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="hidden lg:flex max-w-7xl h-16 gap-3 px-5 justify-between items-center border-b">
      <span className="font-bold text-xl">YourLib</span>
      <ul className="flex gap-5">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">All Books</Link></li>
        <li><Link to="/add-books">Add Book</Link></li>
        <li><Link to="/borrow-summary">Borrow Summary</Link></li>
      </ul>
    </nav>
  );
};
