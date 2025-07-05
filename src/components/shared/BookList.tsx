
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { AddBooksModal } from "../modules/books/AddBooksModal";
import { UpdateBooksModal } from "../modules/books/UpdateBooksModal";
import {
  useDeleteBooksMutation,
  useGetAllBooksQuery,
} from "@/redux/api/baseApi";
import type { IBooks } from "@/redux/features/books/type";
import { BorrowBooksModal } from "../modules/books/BorrowBookModal";
import { toast } from "react-toastify";

const BookList = () => {
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  const [deleteSBook] = useDeleteBooksMutation();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">📚 All Books</h1>
        <AddBooksModal />
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableCaption>A list of Books.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Copies</TableHead>
              <TableHead>Available</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!isLoading &&
              data.data.map((book: IBooks) => (
                <TableRow key={book._id}>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.genre}</TableCell>
                  <TableCell>{book.isbn}</TableCell>
                  <TableCell>{book.copies}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 text-sm rounded ${
                        book.available
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {book.available ? "Yes" : "No"}
                    </span>
                  </TableCell>
                  <TableCell className="flex justify-around">
                    <UpdateBooksModal book={book} />
                    <Button
                      onClick={() => {
                        const id = book._id as string;

                        if (!id) {
                          toast.error("Book ID is missing");
                          return;
                        }

                        toast(
                          ({ closeToast }) => (
                            <div className="space-y-2">
                              <p>Are you sure you want to delete this book?</p>
                              <div className="flex justify-end gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    closeToast?.();
                                  }}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={async () => {
                                    closeToast?.();
                                    try {
                                      toast.info("Deleting book...");
                                      await deleteSBook(id).unwrap();
                                      toast.success("Book deleted successfully!");
                                    } catch (err) {
                                      console.error("Delete failed", err);
                                      toast.error("Failed to delete book.");
                                    }
                                  }}
                                >
                                  Yes, Delete
                                </Button>
                              </div>
                            </div>
                          ),
                          {
                            autoClose: false,
                            closeOnClick: false,
                            closeButton: false,
                          }
                        );
                      }}
                      className="bg-red-500 text-white"
                    >
                      Delete
                    </Button>
                    {book._id && <BorrowBooksModal bookId={book._id} />}
                  </TableCell>
                </TableRow>
              ))}
            {data?.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center py-4 text-gray-500"
                >
                  No books found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BookList;
