
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
                      onClick={async () => {
                        try {
                          const id = book._id as string
                          if (id) {
                            await deleteSBook(id).unwrap();
                          } else {
                            console.error("Book ID is missing");
                          }
                        } catch (err) {
    
                          console.error("Delete failed", err);
                        }
                      }}
                      className="bg-red-500"
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
