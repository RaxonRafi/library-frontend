import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const MobileSidebar = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="w-[250px] h-full bg-white p-6 shadow-xl border-r flex flex-col gap-5">
        <DrawerClose asChild>
          <Button variant="ghost" size="icon" className="self-end">
            ❌
          </Button>
        </DrawerClose>

        <nav className="flex flex-col gap-4 mt-6">
          <Link to="/" className="text-lg font-medium">🏠 Home</Link>
          <Link to="/books" className="text-lg font-medium">📚 All Books</Link>
          <Link to="/borrow-summary" className="text-lg font-medium">📄 Borrow Summary</Link>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};
