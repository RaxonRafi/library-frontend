import { Link } from "react-router"


export const Navbar = () => {
  return (
    <nav className="max-w-7xl h-16 gap-3 px-5 flex justify-between items-center">
        <div className="">
            <span className="font-bold text-xl">YourLib</span>
        </div>
        <div>
            <ul className="flex gap-5">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="all-books">All Books</Link>
                </li>
                <li>
                    <Link to="add-books">Add Book</Link>
                </li>
                <li>
                    <Link to="borrow-summary">Borrow Summary</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
