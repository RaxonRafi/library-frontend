import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const MobileSidebar = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <Menu className="h-6 w-6" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="w-[250px] h-full bg-white p-6 shadow-xl border-r flex flex-col gap-5">
        <DrawerClose asChild>
          <Button variant="ghost" size="icon" className="self-end text-gray-600 hover:text-gray-900">
            <X className="h-5 w-5" />
          </Button>
        </DrawerClose>

        <nav className="flex flex-col gap-4 mt-6">
          <Link to="/" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
            🏠 Home
          </Link>
          <Link to="/books" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
            📚 All Books
          </Link>
          <Link to="/borrow-summary" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
            📄 Borrow Summary
          </Link>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};