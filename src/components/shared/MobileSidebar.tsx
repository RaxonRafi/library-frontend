import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const MobileSidebar = () => {
  return (
    <div className="lg:hidden p-4 border-b flex justify-between items-center">
      <span className="font-bold text-xl">YourLib</span>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </DialogTrigger>

        <DialogPortal>
          <DialogOverlay className="fixed inset-0 bg-black/40 z-40" />

          <DialogContent
            className="fixed top-0 left-0 z-50 h-full w-[250px] bg-white p-6 shadow-xl flex flex-col gap-5 animate-in slide-in-from-left"
            hideClose
          >
            <nav className="flex flex-col gap-4 mt-6">
              <Link to="/" className="text-lg font-medium">🏠 Home</Link>
              <Link to="/books" className="text-lg font-medium">📚 All Books</Link>
              <Link to="/add-books" className="text-lg font-medium">➕ Add Book</Link>
              <Link to="/borrow-summary" className="text-lg font-medium">📄 Borrow Summary</Link>
            </nav>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
};
