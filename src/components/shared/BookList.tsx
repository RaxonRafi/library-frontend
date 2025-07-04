import { deleteBook, getBooks } from '@/redux/features/books/bookSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { Link } from 'react-router';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '../ui/button';
import { AddBooksModal } from '../modules/books/AddBooksModal';
import { UpdateBooksModal } from '../modules/books/UpdateBooksModal';


const BookList = () => {
    const books = useAppSelector(getBooks)
    const dispatch = useAppDispatch()

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">📚 All Books</h1>
        {/* <Button>
            <Link to="/add-books">
            + Add Book
            </Link>
        </Button> */}
        <AddBooksModal/>
      </div>

      <div className="overflow-x-auto">
        <Table>
            <TableCaption>A list of Books.</TableCaption>
            <TableHeader >
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
                {
                books.map((data)=>(
                <TableRow key={data._id}>
                    <TableCell>{data.title}</TableCell>
                    <TableCell>{data.author}</TableCell>
                    <TableCell>{data.genre}</TableCell>
                    <TableCell>{data.isbn}</TableCell>
                    <TableCell>{data.copies}</TableCell>
                    <TableCell>
                        <span
                    className={`px-2 py-1 text-sm rounded ${
                      data.available ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                    }`}
                  >
                    {data.available ? "Yes" : "No"}
                  </span>
                    </TableCell>
                    <TableCell className='flex justify-around'>
                        <UpdateBooksModal book={data}/>
                        <Button 
                        onClick={() => { if (data._id) dispatch(deleteBook(data._id)); }}
                        className='bg-red-500'>
                            Delete
                        </Button>
                        <Button className='bg-blue-500'>
                            <Link to={`/borrow/${data._id}`}>Borrow</Link>
                        </Button>
                    </TableCell>
                </TableRow>
                ))
                }
            {books?.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4 text-gray-500">
                  No books found.
                </TableCell>
              </TableRow>
            )}
            </TableBody>
     
        </Table>
      </div>
    </div>
  );
}

export default BookList