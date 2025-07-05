import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { IBooks } from "@/redux/features/books/type";

interface Props {
  book: IBooks;
}

export const BookDetailsModal = ({ book }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <h2 className="text-xl font-bold mb-4">{book.title}</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>Total Copies:</strong> {book.copies}</p>
          <p>
            <strong>Available:</strong>{" "}
            {book.available ? "Yes" : "No"}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
